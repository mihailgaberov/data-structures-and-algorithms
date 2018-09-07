'use strict';
function checkMagazine(magazine, note) {
    let res = 'Yes';
    const magazineWords = {};
    
    magazine.forEach(word => {
      if (!magazineWords[word]) {
        magazineWords[word] = 0;
      }
      magazineWords[word]++;
    })

    note.forEach(word => {
      if (magazineWords[word]) {
        magazineWords[word]--;
        if (magazineWords[word] < 0)
          res = 'No';
      } else {
        res = 'No';
      }
    });
  
  console.log(res);
}

checkMagazine(['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'], ['ive', 'got', 'some', 'coconuts'])
