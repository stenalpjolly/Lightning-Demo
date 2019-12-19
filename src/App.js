import AssetPoster from "./AssetPoster.js";

export default class App extends ux.App {

    static getFonts() {
        return [
        ]
    }

    _init(){
        let items = [];
        for (let i = 0; i < 10; i++) {
            items.push({
                type: AssetPoster
            })
        }
        this.tag("AssetList").patch({
            items: items

        })
    }

    static _template() {
        return {
            Background:{
                h: 1080,
                w: 1920,
                texture: {
                    type: lng.textures.ImageTexture,
                    src: "./imgs/Background.jpg"
                },
                BackgroundDimmer: {
                    w: w => w,
                    h: h => h,
                    rect: true,
                    colorRight: 0xff000000,
                    colorLeft: 0x00000000
                }
            },
            ShowInfo: {
                x: 1290,
                ShowTitle: {
                    y: 144,
                    text: {
                        fontSize: 64,
                        fontFace: "Arial Black",
                        fontStyle: "bold",
                        text: "The Mandalorian"
                    }
                },
                ShowInfo: {
                    y:246,
                    w: 521,
                    text:{
                        fontSize: 24,
                        fontFace: "Arial",
                        wordWrap: true,
                        textColor: 0xffE2E2E2,
                        text: "Set after the fall of the Empire and before the emergence of the First Order, we follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic."
                    }
                }
            },
            BottomBanner:{
                x: 0,
                y: 720,
                w: 1920,
                h: 360,
                rect: true,
                colorTop: 0xffffffff,
                colorBottom: 0xff818181,
                AssetList:{
                    type: lng.components.ListComponent,
                    x: 60,
                    y: 20,
                    w: 1920,
                    h: 360,
                    itemSize: 270,
                    viewportScrollOffset: 0.04
                }
            }
        };
    }

    _getFocused() {
        return this.tag("AssetList").element;
    }

    _handleRight(){
        this.tag("AssetList").setNext();
    }

    _handleLeft(){
        this.tag("AssetList").setPrevious();
    }

}
