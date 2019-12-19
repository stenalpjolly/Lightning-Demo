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
                color: 0xff000000,
                PosterImg:{
                    w: w=> w,
                    h: h=> h,
                    texture:{
                        type: lng.textures.ImageTexture,
                    }
                }
            },
            Info:{
                x: 0,
                y: 290,
                text: {
                    textAlign: 'left',
                    text: "Show Name",
                    fontStyle: "bold",
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
        this.fireAncestors("$dataChange", this._model);
    }

    _unfocus(){
        this._setState("UnFocused");
    }

    set model(data){
        this._model = data;
        this.tag("Info").patch({
            text: {
                text: data.name
            }
        });
        this.tag("PosterImg").patch({
            texture: {
                src: "http://image.tmdb.org/t/p/original/" + data.poster_path
            }
        });
    }


    static _states(){
        return [
            class Focused extends this {
                $enter() {
                    this.patch({
                        Poster: {
                            x: -30,
                            y: -90,
                            w: 240,
                            h: 360
                        },
                        Info: {
                            x: -30,
                            text:{
                                textColor: 0xff000000
                            }
                        }
                    })
                }
            },
            class UnFocused extends this {
                $enter() {
                    this.patch({
                        Poster: {
                            y: 0,
                            x: 0,
                            w: 180,
                            h: 270,
                        },
                        Info: {
                            x: 0,
                            text:{
                                textColor: 0xff272727
                            }
                        }
                    })
                }
            }
        ];
    }
};
