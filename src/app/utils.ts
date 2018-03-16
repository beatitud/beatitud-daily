export function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export function getVerseNbAndTextList(text) {
  let regex = /[^\d]+ (\d+),(\d+)/ // return groups (nb of chapter, nb of verse, verse text)
  let verseText = text.split("[[").splice(1).map(s => s.split("]]"))
    .map( a => {
      return {
        number: a[0].match(regex)[2],
        text: a[1]
      }
    })
  return verseText
}
