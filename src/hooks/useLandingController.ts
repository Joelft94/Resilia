import { useState, useEffect, useCallback } from 'react';
import { useCheckout, useProducts, useCurrency } from "@tagadapay/plugin-sdk/react";
import { usePluginConfig } from "@tagadapay/plugin-sdk/react";
import { RosabellaMoringaConfig, applyThemeColors } from '../lib/config-helpers';

export const useLandingPageController = () => {
    // SDK v2.3.8 - Automatic config loading
    const { config, loading: configLoading } = usePluginConfig<RosabellaMoringaConfig>();
    const { init } = useCheckout({});
    const { format } = useCurrency();

    // Single product from store via SDK
    const { products, isLoading: productsLoading } = useProducts({
        productIds: config ? [config.product.id] : [],
        includeVariants: true,
        includePrices: true
    });

    // State for single product checkout
    const [isLoading, setIsLoading] = useState(false);
    const [initLoading, setInitLoading] = useState(false);

    // Apply theme colors when config loads
    useEffect(() => {
        if (config) {
            applyThemeColors(config);
        }
    }, [config]);

    const onBuyNow = async () => {
        setInitLoading(true);

        if (!products[0]?.variants?.[0] || !config) {
            setInitLoading(false);
            return;
        }

        const variant = products[0].variants[0];
        const price = variant.prices[0];

        const lineItems = [{
            variantId: variant.id,
            quantity: 1,
            priceId: price.id,
        }];

        try {
            // Initialize checkout for single product
            const result = await init({
                lineItems,
            });

            if (result) {
                window.location.href = result.checkoutUrl;
            }
        } catch (error) {
            console.error('Checkout initialization failed:', error);
        } finally {
            setInitLoading(false);
        }
    };

    return {
        // Product data from SDK
        product: products[0],
        productImage: products[0]?.variants?.[0]?.imageUrl,
        productName: products[0]?.name,
        productPrice: config?.product?.price || 49.95,

        // Config data
        config,

        // Loading states
        isLoading: productsLoading || configLoading || isLoading,
        initLoading,

        // Single product checkout
        onBuyNow,

        // Currency formatter
        format
    };
};