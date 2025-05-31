'use client';
import { useRouter } from 'next/navigation';
import React from 'react';


const Card1 = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/opportunities/indian')
    }

    return (
        <div className="bg-blue-100 rounded-xl shadow p-4 mx-2! my-10!">
            <div className="card bg-base-100 w-86! shadow-sm">
                <figure>
                    <img
                        src="/image/OperImage/01.svg"
                        alt="Shoes"
                        className="w-[200px]! h-[250px]!"
                    />
                </figure>
                <div className="card-body!">
                    <h2 className="card-title!">بورسیه دولتی کشور هند</h2>
                    <p>کشور هند در سال ۲۰۲۵ به تعداد ۲۰۰۰ بورسیه تحصیلی به کشور های جهان سوم در نظر گرفته که شامل کشور افغانستان نیر میشود.</p>
                    <div className="card-actions! justify-end!">
                        <button onClick={handleClick} className="btn! btn-primary!">بیشتر بخوانید</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card1;
