<?php
/**
 * Plugin Name: Video Testimonial Slider CWS
 * Description: A Swiper.js powered video testimonial slider Gutenberg block.
 * Version: 1.0.0
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * Author: Neer Lashkari
 * License: GPL-2.0-or-later
 * Text Domain: video-testimonial-slider-cws
 */

if ( ! defined( 'ABSPATH' ) ) exit;

function video_testimonial_slider_block_init() {
    register_block_type( __DIR__ . '/build/slider' );
    register_block_type( __DIR__ . '/build/slide' );
}
add_action( 'init', 'video_testimonial_slider_block_init' );

function video_testimonial_slider_frontend_assets() {
    if ( has_block( 'create-block/video-testimonial-slider' ) ) {

        // Swiper CSS
        wp_enqueue_style(
            'swiper-css',
            'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css',
            [],
            '11.0.5'
        );

        // Swiper JS
        wp_enqueue_script(
            'swiper-js',
            'https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js',
            [],
            '11.0.5',
            true
        );

        // Our frontend init script
        wp_enqueue_script(
            'video-testimonial-frontend',
            plugin_dir_url( __FILE__ ) . 'assets/frontend.js',
            [ 'swiper-js' ],
            '1.0.0',
            true
        );
    }
}
add_action( 'wp_enqueue_scripts', 'video_testimonial_slider_frontend_assets' );