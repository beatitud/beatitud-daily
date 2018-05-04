import { isNil, isEqual, isArray, flow, head, pickBy, values, keys, zipObject, partial } from 'lodash';

export interface IOperationResult<TIn> {
  type: ResultType;
  value: TIn;
}

export interface IPersistenceSuccess extends IOperationResult<any> {
  destination: string;
  messageId?: string;
  result?: string;
}

export interface IUnsuccessfulOperation extends IOperationResult<any> {
  reason: string;
}

export enum ResultType {
  SUCCESS = 'success',
  FAILURE = 'failure',
  ABORT = 'abort',
}

export function success<TIn>(value: TIn): IOperationResult<TIn> {
  if (isNil(value)) {
    return failure('Received value is null, so it should be a failure');
  }
  return {
    type: ResultType.SUCCESS,
    value,
  };
}

export const failure = (reason: string) => ({
  type: ResultType.FAILURE,
  reason,
} as IUnsuccessfulOperation);

export const abort = (reason: string) => ({
  type: ResultType.ABORT,
  reason,
} as IUnsuccessfulOperation);

export function isSuccessful<TIn>(result: IOperationResult<TIn>) {
  return isEqual(result.type, ResultType.SUCCESS);
}
export function isUnsuccessful<TIn>(result: IOperationResult<TIn>) {
  return !isNil(result.type) && !isEqual(result.type, ResultType.SUCCESS);
}

export function isFailure<TIn>(result: IOperationResult<TIn>) {
  return isEqual(result.type, ResultType.FAILURE);
}

export function isAbort<TIn>(result: IOperationResult<TIn>) {
  return isEqual(result.type, ResultType.ABORT);
}

type Func = (...x: any[]) => Promise<IOperationResult<any>>;

export function chainOperationsAsync(...functions: Func[]) {
  type Op = IOperationResult<any>;
  const bind = async (f: Func, x: Promise<Op>): Promise<Op> => {
    const res = await (x.catch(failure));
    if (isUnsuccessful(res)) {
      return res;
    }
    const params = !isArray(res.value) ? [res.value] : res.value;
    return f(...params);
  };
  const bindPartially = (f: Func) => partial(bind, f);
  const init = (...x: any[]) => Promise.resolve(success(x));
  return flow([init].concat(functions.map(bindPartially)));
}

export function getFirstFailureOrDefault<TIn>(entry: TIn) {
  const failed = flow(x => pickBy(x, isUnsuccessful), values, head)(entry);
  if (!isNil(failed)) {
    return failed;
  }
  const vs = values(entry).map(x => x.value);
  const ks = keys(entry);
  const result = zipObject(ks, vs);
  return success(result);
}
