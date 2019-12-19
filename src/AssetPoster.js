export default class AssetPoster extends lng.Component {

    _init(){
        this.tag("Poster").patch({
            color: this.getColor()
        });
    }

    static _template(){
        return {
            Poster:{
                rect: true,
                w: 180,
                h:270,
                color: 0xff000000
            },
            Info:{
                x: 0,
                y: 290,
                text: {
                    textAlign: 'left',
                    text: "Show Name",
                    fontSize: 20,
                    textColor: 0xff272727
                }
            }
        }
    }

    getColor() {
        let x = Math.random() * 1000000;
        return 0xff000000 + x;
    }

    _focus(){
        this._setState("Focused");
    }

    _unfocus(){
        this._setState("UnFocused");
    }


    static _states(){
        return [
            class Focused extends this {
                $enter() {
                    this.tag("Poster").patch({
                        x: -30,
                        y: -90,
                        w: 240,
                        h: 360
                    });
                    this.tag("Info").patch({
                        x: -30,
                        text:{
                            textColor: 0xff000000
                        }
                    });
                }
            },
            class UnFocused extends this {
                $enter() {
                    this.tag("Poster").patch({
                        y: 0,
                        x: 0,
                        w: 180,
                        h: 270,
                    });
                    this.tag("Info").patch({
                        x: 0,
                        text:{
                            textColor: 0xff272727
                        }
                    });
                }
            }
        ];
    }
};
