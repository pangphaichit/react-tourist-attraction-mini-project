import React from 'react';
import linkIcon from '../assets/link.png';


export function DestinationCard({ image, title, description, url, category, morePhoto, onCategoryClick  }) {
    const truncatedDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url) 
            .then(() => {
                alert("Link copied to clipboard!"); 
            })
            .catch((err) => {
                console.error("Could not copy text: ", err);
            });
    };

    return (
        <div className="flex items-start rounded-lg mb-5 overflow-hidden my-10 h-auto">
        <div className="flex-none w-1/3  h-full">
            <img src={image} alt="Destination" className="rounded-3xl w-full h-full object-cover" />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-between h-full">
            <div>
                <h2 className="text-xl font-bold ">{title}</h2>
                <span className="text-gray-400 my-2">{truncatedDescription}</span>
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-blue-600  rounded underline"
                    >
                        อ่านต่อ
                    </a>
            </div>
            <div className="my-2">
                <span className="text-gray-400"> หมวด </span>
                    {category.map((tag, index) => (
                        <span key={index} className="text-gray-400 mr-2 underline"  onClick={() => onCategoryClick(tag)}>{tag}</span>
                    ))}
                </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {morePhoto.map((photo, index) => (
                    <img key={index} src={photo} alt={`Additional ${index + 1}`} className=" w-20 h-20 object-cover rounded-xl" />
                ))}
            </div>
        </div>
    </div>
    )
}