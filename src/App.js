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
