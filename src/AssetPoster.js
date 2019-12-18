export default class AssetPoster extends lng.Component {

    _init(){
        this.tag("Poster").patch({
            color: this.getColor()
        })
    }

    static _template(){
        return {
            Poster:{
                rect: true,
                w: 180,
                h:270,
                color: 0xff000000
            }
        }
    }

    getColor() {
        let x = Math.random() * 1000000;
        return 0xff000000 + x;
    }
};
