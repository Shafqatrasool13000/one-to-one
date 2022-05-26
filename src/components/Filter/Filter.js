import React, { useEffect, useState } from 'react'
import { FilterStyledMain } from './StyledFilter'

const Filter = () => {
    const [processComponent, setProcessComponent] = useState('');
    const [range, setRange] = useState(50);

    useEffect(() => {
        // document.getElementById("process-default-btn").style.border = '2px solid #3134DB';
    }, []);
    console.log(range,"range");

    const handleChange = (value) => {
        document.getElementById('process-default-btn').style = null;
    }
    const brands = ['Brand Name 1', 'Brand Name 2', 'Brand Name 3', 'Brand Name 4',];
    const catagories = ['Hand Protection', 'Head Protection', 'Groin Protection', 'Shin Protection'];
    const colors = ['Red', 'Blue', 'Yellow', 'Golden', 'Silver', 'Pink', 'Black'];
    const sizes = ['S', 'M', 'L', 'XL'];
    return (
        <FilterStyledMain>
            <div className="filter-section mt-20">
                <h5 className="title">Brand</h5>

                <div className='filter-btns d-flex'>
                    {
                        brands.map((title, index) => (
                            <div className='filter' key={index}>
                                <input type="checkbox" id={title} name="brand" onClick={(e) => handleChange(e.target.value)} value="{title}" />
                                <label htmlFor={title}>{title}</label>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className="catagories-section mt-20">
                <h5 className="title">Catagories</h5>

                <div className='filter-btns d-flex'>
                    {
                        catagories.map((title, index) => (
                            <div className='filter' key={index}>
                                <input type="checkbox" id={title} name="brand" onClick={(e) => handleChange(e.target.value)} value="{title}" />
                                <label htmlFor={title}>{title}</label>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="color-section mt-20">
                <h5 className="title">Color</h5>

                <div className='filter-btns d-flex'>
                    {
                        colors.map((title, index) => (
                            <div className='filter' key={index}>
                                <input type="checkbox" id={title} name="brand" onClick={(e) => handleChange(e.target.value)} value="{title}" />
                                <label className='px-4' htmlFor={title}>{title}</label>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="size-section mt-20">
                <h5 className="title">Size</h5>

                <div className='filter-btns d-flex'>
                    {
                        sizes.map((title, index) => (
                            <div className='filter' key={index}>
                                <input type="checkbox" id={title} name="brand" onClick={(e) => handleChange(e.target.value)} value="{title}" />
                                <label className='px-5' htmlFor={title}>{title}</label>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="price-section mt-20">
                <h5 className="title">Price Range</h5>
                <div className="range-inputs my-3 d-flex align-items-center">
                    <input type="text"  value='$50' />
                    <p className='ps-3 pe-2 '>-</p>
                    <input type="text" value='$250' />
                </div>
                <input  type="range" min="50" max="250" value={range} onChange={(event)=>setRange(event.target.value)} class="slider" id="myRange"/>
                

            </div>
        </FilterStyledMain>
    )
}

export default Filter