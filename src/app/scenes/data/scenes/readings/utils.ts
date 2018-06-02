export function getVerseNbAndTextList(text) {
  let regex = /[^\d]+ (\d+),(\d+)/ // return groups (nb of chapter, nb of verse, verse text)
  let verseText = text.split("[[").splice(1).map(s => s.split("]]"))
    .map( a => {
      return {
        chapter: a[0].match(regex)[1],
        number: a[0].match(regex)[2],
        text: a[1]
      }
    })
  return verseText
}
