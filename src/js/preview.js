import { gsap } from 'gsap';

export class Preview {
    constructor(el) {
        this.DOM = { el: el };
        this.DOM.backCtrl = this.DOM.el.querySelector('.preview__item-back');
        this.DOM.imgWrap = this.DOM.el.querySelector('.preview__item-imgwrap');
        this.DOM.image = this.DOM.imgWrap.querySelector('.preview__item-img');
        this.DOM.title = this.DOM.el.querySelector('.preview__item-title');
        this.DOM.titleChars = [...this.DOM.title.querySelectorAll('.char')];
        this.DOM.content = this.DOM.el.querySelector('.preview__item-content');

        this.init();
    }
    init() {
        gsap.set(this.DOM.titleChars, { opacity: 0, y: '100%' });

        gsap.set(this.DOM.imgWrap, { y: '100%', rotationX: -20 });
        gsap.set(this.DOM.image, { y: '-100%' });

        gsap.set(this.DOM.backCtrl, { opacity: 0 });

        gsap.set(this.DOM.content, { opacity: 0 });
    }
}