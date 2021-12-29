function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(zzem(person.photo)); //--추출함수
  //   result.push(`<p>title: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

function photoDiv(aPhoto) {
  return ["<div>", `<p>title: ${aPhoto.title}</p>`, "</div>"].join("\n");
}

//함수추출
function zzem(p) {
  return [`<p>title: ${p.title}</p>`, emitPhotoData(p)].join("\n");
}

function emitPhotoData(aPhoto) {
  return [
    `<p>title: ${aPhoto.title}</p>`,
    `<p>location: ${aPhoto.location}</p>`,
    `<p>date: ${aPhoto.date.toDateString()}</p>`,
  ].join("\n");
}

function renderPhoto(aPhoto) {
  return "";
}
