import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLandingPageController } from '../../hooks/useLandingController';
import { TestimonialCard } from './TestimonialCard';
import { GuaranteeSection } from './GuaranteeSection';
import { FAQSection } from './FAQSection';

export function HeroSection() {
    const { config, onBuyNow, initLoading } = useLandingPageController();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!config) return null;

    const carouselImages = config.product?.carouselImages || [];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="text-yellow-400">★</span>);
        }

        if (hasHalfStar) {
            stars.push(<span key="half" className="text-yellow-400">☆</span>);
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
        }

        return stars;
    };

    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 py-8">
                {/* Logo */}
                <div className="text-center mb-8">
                    <img
                        src={config.branding.logoUrl}
                        alt={config.branding.companyName}
                        className="h-12 mx-auto"
                    />
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Product Carousel (Sticky) */}
                    <div className="order-2 lg:order-1 lg:sticky lg:top-8 lg:self-start">
                        {carouselImages.length > 0 && (
                            <div className="relative">
                                {/* Main Product Image */}
                                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                                    <img
                                        src={carouselImages[currentImageIndex]}
                                        alt={`${config.product.name} ${currentImageIndex + 1}`}
                                        className="w-full h-auto object-contain"
                                    />

                                    {/* Navigation Arrows */}
                                    {carouselImages.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                                            >
                                                <ChevronLeft className="w-6 h-6 text-gray-800" />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                                            >
                                                <ChevronRight className="w-6 h-6 text-gray-800" />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnail Strip */}
                                {carouselImages.length > 1 && (
                                    <div className="flex space-x-2 justify-center mt-4">
                                        {carouselImages.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                                    index === currentImageIndex
                                                        ? "border-primary"
                                                        : "border-gray-200 hover:border-gray-300"
                                                }`}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Testimonial Card below carousel */}
                        <TestimonialCard />
                    </div>

                    {/* Right Column - Product Info (Scrollable) */}
                    <div className="order-1 lg:order-2 min-h-screen">
                        {/* Amazon Reviews */}
                        {config.reviews && (
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center">
                                    {renderStars(config.reviews.averageRating)}
                                </div>
                                <span className="text-sm font-medium">
                                    {config.reviews.averageRating}/5
                                </span>
                                <span className="text-sm text-gray-600">
                                    based on {config.reviews.totalReviews?.toLocaleString()}+ verified customer reviews on {config.reviews.platform}
                                </span>
                                <span className="text-xs text-gray-500">
                                    as of {config.reviews.date}
                                </span>
                            </div>
                        )}

                        {/* Product Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {config.product.name} – {config.product.subtitle}
                        </h1>

                        {/* Product Description */}
                        <p className="text-lg text-gray-700 mb-4">
                            {config.product.description}
                        </p>

                        <p className="text-base text-gray-600 mb-6">
                            {config.product.detailedDescription}
                        </p>

                        {/* Benefits Checklist */}
                        <div className="space-y-3 mb-6">
                            {config.product.benefits?.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* Shipping Info */}
                        {config.shipping && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                <div className="flex items-center gap-2 text-green-700 font-medium">
                                    <span className="text-green-500">🚚</span>
                                    <span>Ships by {config.shipping.estimatedDate} {config.shipping.provider}</span>
                                </div>
                            </div>
                        )}

                        {/* Add to Cart Button */}
                        <button
                            onClick={onBuyNow}
                            disabled={initLoading}
                            className="w-full text-xl font-bold py-4 px-8 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-4"
                            style={{
                                backgroundColor: config.cta?.primaryButtonColor || '#059669',
                                color: config.cta?.primaryButtonTextColor || '#ffffff'
                            }}
                        >
                            {initLoading ? 'Processing...' : config.cta?.primaryButton || 'ADD TO CART'}
                        </button>

                        {/* Stock and Delivery Info */}
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>{config.shipping?.stockMessage || 'In stock'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>⏱️</span>
                                <span>Expected delivery in {config.shipping?.deliveryTime || '3 to 6 business days'}</span>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        {config.paymentMethods && (
                            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                                {config.paymentMethods.map((method, index) => (
                                    <div key={index} className="flex items-center justify-center h-8">
                                        <div
                                            className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-700"
                                            title={method.name}
                                        >
                                            {method.alt}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Guarantee Section */}
                        <GuaranteeSection />

                        {/* FAQ Section */}
                        <FAQSection />
                    </div>
                </div>
            </div>
        </section>
    );
}