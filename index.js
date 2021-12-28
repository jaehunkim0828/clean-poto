const path = require('path');
const fs = require('fs');

const mkdir = fs.mkdirSync;
const testDir = path.join(__dirname, process.argv[2] || 'test');

function main () {
  fs.readdir(testDir, (err, filelist) => {
    if (err) {
    }
    const video = filelist.filter(item => path.extname(item) === '.mp4' || path.extname(item) === '.mov' || path.extname(item) ==='.mp3');
    const capture = filelist.filter(item => path.extname(item) === '.png' || path.extname(item) === '.aae');
    const duplicated = filelist.filter(item => item.startsWith('IMG_') && !item.startsWith('IMG_E'));
    //여기는 mp3 mov파일을 video파일에 move하기
    if (filelist.indexOf('video')) {

      mkdir(path.join(testDir, 'video'));
    }
    //여기는 capture된 파일을 capture파일에 move해주기
    if (filelist.indexOf('capture')) {
      mkdir(path.join(testDir, 'capture'));
    }

    //여기는 보정이 안된 사진들을 duplicated파일에 move해주기
    if (filelist.indexOf('duplicated')) {
      mkdir(path.join(testDir, 'duplicated'));
    }
    video.map(item => {
      fs.rename(path.join(testDir, item), path.join(testDir, 'video', item), function(err) {
      });
    })
    capture.map(item => {
      fs.rename(path.join(testDir, item), path.join(testDir, 'capture', item), function(err) {
      });
    })
    duplicated.map(item => {
      fs.rename(path.join(testDir, item), path.join(testDir, 'duplicated', item), function(err) {
        if ( err ) console.log('ERROR: ' + err);
      });
    })
    
  })
}

main();


