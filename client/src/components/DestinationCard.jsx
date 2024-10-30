import React from 'react';
import copyLinkIcon from '../assets/link.png';

export function DestinationCard({ image, title, description, url, category, morePhoto, onCategoryClick  }) {
    const truncatedDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url)
            .then(() => {
                alert("คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว");
            })
            .catch((err) => {
                console.error("ไม่สามารถคัดลอกข้อความ: ", err);
                alert("Failed to copy link. Please try again.");
            });
    };

    return (
        <div className="flex items-start rounded-lg mb-5 overflow-hidden my-10 h-auto ">
        <div className="flex-none w-1/3  h-full mx-10">
            <img src={image} alt="Destination" className="rounded-3xl w-96 h-72 object-cover" />
        </div>
        <div className="flex-1  flex flex-col justify-between h-full">
            <div>
            <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl font-bold block hover:text-blue-500"
            >
                {title}
            </a>
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
            <div className="flex items-end justify-end">
            <img 
            src={copyLinkIcon}
             onClick={handleCopyLink} 
             className="icon items-end-4 w-12 h-12 cursor-pointer" 
             />
             </div>
        </div>
    </div>
    )
}