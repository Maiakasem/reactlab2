import React, { Component } from "react";

export class Slider extends Component {
    constructor (props) {
        super(props);

        this.state = {
            currentIndex: 0,
            isAutoSliding: false,
        };
        
        this.images = [
            'https://images.app.goo.gl/8vagdYc273yS9BiU7',
            'https://images.app.goo.gl/LhTECsiPXfUBHcPs6',
            'https://images.app.goo.gl/iSiYZPuXaV5ECrHh9',
            'https://images.app.goo.gl/UvKLZijcwrPBgPzYA',
            'https://images.app.goo.gl/rLy7QcQBFJrQJvDr7',
        ];
    };

    nextSlide = () => {
        const { currentIndex } = this.state;
        const newIndex = (currentIndex + 1) % this.images.length;
        this.setState({ currentIndex: newIndex });
    };

    prevSlide = () => {
        const { currentIndex } = this.state;
        const newIndex = currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
        this.setState({ currentIndex: newIndex });
    };

    startAutoSlide = () => {
        this.setState({ isAutoSliding: true }, () => {
            this.autoSlideInterval = setInterval(this.nextSlide, 2000);
        });
    };

    stopAutoSlide = () => {
        this.setState({ isAutoSliding: false }, () => {
            clearInterval(this.autoSlideInterval);
        });
    };

    render() {
        const { currentIndex } = this.state;
        return (
        <div className="container">
            <div className="row" >
                <div>
                    <img src={this.images[currentIndex]} alt="slide" className="w-100 rounded-4 d-block mx-auto mb-3" style={{width:'300px', height:'700px'}}/>
                    <button onClick={this.prevSlide} className="btn btn-dark me-2">Previous</button>
                    <button onClick={this.nextSlide} className="btn btn-dark me-3">Next</button>
                    <button onClick={this.startAutoSlide} className="btn btn-warning me-2">Auto Slide</button>
                    <button onClick={this.stopAutoSlide} className="btn btn-info me-2">Stop</button>
                </div>
            </div>
            <hr />
        </div>
        );
    }
}

export default Slider;
