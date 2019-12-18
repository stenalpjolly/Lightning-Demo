export default class App extends ux.App {

    static getFonts() {
        return [
        ]
    }

    static _template() {
        return {
            Background:{
                h: 1080,
                w: 1920,
                texture: {
                    type: lng.textures.ImageTexture,
                    src: "./imgs/Background.jpg"
                }
            },
            BottomBanner:{
                x: 0,
                y: 720,
                w: 1920,
                h: 360,
                rect: true,
                colorTop: 0xffffffff,
                colorBottom: 0xff818181
            }
        };
    }

}
