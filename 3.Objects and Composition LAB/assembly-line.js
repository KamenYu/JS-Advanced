
function solve(){
    let assembler = {
        hasClima(obj){
            obj.temp = 21,
            obj.tempSettings = 21,
            obj.adjustTemp = () => {
                if(obj.temp < obj.tempSettings){
                    obj.temp++;
                } else if (obj.temp > obj.tempSettings){
                    obj.temp--;
                }
            }
        },
        hasAudio(obj){
            obj.currentTrack = { name: '', arstist: '' };
            obj.nowPlaying = () => {

                if(obj.currentTrack !== null){
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                }
            }
        },
        hasParktronic(obj){
            obj.checkDistance = (distance) => {
                let message = '';
                if (distance < 0.1){
                    message = 'Beep! Beep! Beep!';
                } else if (distance >= 0.1 && distance < 0.25){
                    message = 'Beep! Beep!';
                } else if (distance >= 0.25 && distance < 0.5){
                    message = 'Beep!';
                } else {
                    message = '';
                }

                console.log(message);
            }

        }
    }

    return assembler;
}


const assemblyLine = solve();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);