'use client'
import React, { useRef, useEffect, use } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

var text =
  "" +
  "<!DOCTYPE html>" +
  '<html lang="en">' +
  "<head>" +
  '    <meta charset="UTF-8">' +
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0">' +
  "    <title>donal - Innovative Solutions</title>" +
  '    <meta name="description" content="donal - Providing innovative and trustworthy solutions. Contact us for your needs.">' +
  "" +
  "    <!-- Open Graph Meta Tags -->" +
  '    <meta property="og:title" content="donal - Innovative Solutions">' +
  '    <meta property="og:description" content="donal - Providing innovative and trustworthy solutions. Contact us for your needs.">' +
  '    <meta property="og:type" content="website">' +
  '    <meta property="og:url" content="https://donal.com"> <!-- Replace with actual URL -->' +
  "" +
  "    <!-- Favicon - Replace with your favicon -->" +
  '    <link rel="icon" href="data:,">' +
  "" +
  "    <!-- Font Awesome Icons -->" +
  '    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />' +
  "" +
  "    <style>" +
  "        /* Critical CSS - Inlined for performance */" +
  "        :root {" +
  "            --primary-color: #32CD32; /* LimeGreen */" +
  "            --secondary-color: #808080; /* Gray */" +
  "            --text-color-light: #333;" +
  "            --text-color-dark: #eee;" +
  "            --bg-color-light: #f9f9f9;" +
  "            --bg-color-dark: #121212;" +
  "            --glass-bg-light: rgba(255, 255, 255, 0.3);" +
  "            --glass-bg-dark: rgba(0, 0, 0, 0.3);" +
  "            --glass-border-light: rgba(255, 255, 255, 0.5);" +
  "            --glass-border-dark: rgba(255, 255, 255, 0.1);" +
  "            --shadow-color-light: rgba(0, 0, 0, 0.1);" +
  "            --shadow-color-dark: rgba(255, 255, 255, 0.1);" +
  "            --font-family- Montserrat: 'Montserrat', sans-serif;" +
  "            --font-family-Poppins: 'Poppins', sans-serif;" +
  "        }" +
  "" +
  "        body {" +
  "            font-family: var(--font-family-Poppins);" +
  "            margin: 0;" +
  "            padding: 0;" +
  "            box-sizing: border-box;" +
  "            background-color: var(--bg-color-light);" +
  "            color: var(--text-color-light);" +
  "            transition: background-color 0.3s, color 0.3s;" +
  "            overflow-x: hidden; /* Prevent horizontal scrollbar */" +
  "            cursor: default; /* Reset custom cursor if needed */" +
  "        }" +
  "" +
  "        body.dark-mode {" +
  "            background-color: var(--bg-color-dark);" +
  "            color: var(--text-color-dark);" +
  "        }" +
  "" +
  "        /* Scrollbar Customization - Webkit browsers */" +
  "        ::-webkit-scrollbar {" +
  "            width: 8px;" +
  "        }" +
  "" +
  "        ::-webkit-scrollbar-track {" +
  "            background: var(--bg-color-light);" +
  "        }" +
  "" +
  "        body.dark-mode ::-webkit-scrollbar-track {" +
  "            background: var(--bg-color-dark);" +
  "        }" +
  "" +
  "        ::-webkit-scrollbar-thumb {" +
  "            background-color: var(--secondary-color);" +
  "            border-radius: 4px;" +
  "        }" +
  "" +
  "        ::-webkit-scrollbar-thumb:hover {" +
  "            background-color: var(--primary-color);" +
  "        }" +
  "" +
  "" +
  "        /* Typography */" +
  "        h1, h2, h3 {" +
  "            font-family: var(--font-family-Montserrat);" +
  "            font-weight: 700;" +
  "            margin-bottom: 1rem;" +
  "            line-height: 1.2;" +
  "        }" +
  "" +
  "        p {" +
  "            font-family: var(--font-family-Poppins);" +
  "            font-weight: 400;" +
  "            line-height: 1.6;" +
  "            margin-bottom: 1.5rem;" +
  "        }" +
  "" +
  "        a {" +
  "            color: var(--primary-color);" +
  "            text-decoration: none;" +
  "            transition: color 0.3s;" +
  "        }" +
  "" +
  "        a:hover {" +
  "            color: #228B22; /* Slightly darker lime green on hover */" +
  "        }" +
  "" +
  "        /* Layout & Sections */" +
  "        .container {" +
  "            max-width: 1200px;" +
  "            margin: 0 auto;" +
  "            padding: 2rem;" +
  "        }" +
  "" +
  "        section {" +
  "            padding: 6rem 0;" +
  "            position: relative; /* For parallax effect */" +
  "            overflow: hidden; /* Clip parallax background */" +
  "        }" +
  "" +
  "        /* Hero Section */" +
  "        #hero {" +
  "            height: 100vh;" +
  "            display: flex;" +
  "            flex-direction: column;" +
  "            justify-content: center;" +
  "            align-items: center;" +
  "            text-align: center;" +
  "            background: linear-gradient(to bottom, var(--secondary-color), var(--primary-color)); /* Gradient Overlay */" +
  "            color: var(--text-color-dark);" +
  "            position: relative; /* For particle background positioning */" +
  "            overflow: hidden; /* Hide overflowing particles */" +
  "        }" +
  "" +
  "        #hero::before {" +
  "            content: '';" +
  "            position: absolute;" +
  "            top: 0;" +
  "            left: 0;" +
  "            width: 100%;" +
  "            height: 100%;" +
  '            background: url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none"%3E%3Ccircle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.05)"/%3E%3C/svg%3E\') repeat; /* Simple SVG particle background */' +
  "            opacity: 0.6;" +
  "            animation: particleAnimation 20s linear infinite;" +
  "        }" +
  "" +
  "        @keyframes particleAnimation {" +
  "            0% { background-position: 0 0; }" +
  "            100% { background-position: 200px 200px; }" +
  "        }" +
  "" +
  "" +
  "        #hero h1 {" +
  "            font-size: 3rem;" +
  "            margin-bottom: 1rem;" +
  "            color: #fff; /* White text on hero */" +
  "            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);" +
  "        }" +
  "" +
  "        #hero p {" +
  "            font-size: 1.2rem;" +
  "            color: #eee;" +
  "            max-width: 700px;" +
  "            margin: 0 auto 2rem;" +
  "        }" +
  "" +
  "        .cta-button {" +
  "            display: inline-block;" +
  "            padding: 1rem 2rem;" +
  "            background-color: var(--primary-color);" +
  "            color: var(--text-color-dark);" +
  "            font-size: 1.1rem;" +
  "            font-weight: 600;" +
  "            border-radius: 0.5rem;" +
  "            text-decoration: none;" +
  "            transition: background-color 0.3s, transform 0.3s;" +
  "            box-shadow: 0 5px 15px var(--shadow-color-light); /* Light mode shadow */" +
  "        }" +
  "" +
  "        body.dark-mode .cta-button {" +
  "             box-shadow: 0 5px 15px var(--shadow-color-dark); /* Dark mode shadow */" +
  "        }" +
  "" +
  "" +
  "        .cta-button:hover {" +
  "            background-color: #228B22;" +
  "            transform: scale(1.05);" +
  "        }" +
  "" +
  "        .scroll-indicator {" +
  "            position: absolute;" +
  "            bottom: 2rem;" +
  "            left: 50%;" +
  "            transform: translateX(-50%);" +
  "            color: var(--text-color-dark);" +
  "            font-size: 1.5rem;" +
  "            animation: bounce 2s infinite;" +
  "        }" +
  "" +
  "        @keyframes bounce {" +
  "            0%, 20%, 50%, 80%, 100% {" +
  "                transform: translateY(0) translateX(-50%);" +
  "            }" +
  "            40% {" +
  "                transform: translateY(-10px) translateX(-50%);" +
  "            }" +
  "            60% {" +
  "                transform: translateY(-5px) translateX(-50%);" +
  "            }" +
  "        }" +
  "" +
  "        /* About Section */" +
  "        #about {" +
  "            background-color: var(--bg-color-light);" +
  "            color: var(--text-color-light);" +
  "        }" +
  "" +
  "        body.dark-mode #about {" +
  "            background-color: var(--bg-color-dark);" +
  "            color: var(--text-color-dark);" +
  "        }" +
  "" +
  "" +
  "        .timeline {" +
  "            display: flex;" +
  "            flex-direction: column;" +
  "            position: relative;" +
  "        }" +
  "" +
  "        .timeline::before {" +
  "            content: '';" +
  "            position: absolute;" +
  "            top: 0;" +
  "            left: 50%;" +
  "            transform: translateX(-50%);" +
  "            width: 2px;" +
  "            height: 100%;" +
  "            background-color: var(--secondary-color);" +
  "        }" +
  "" +
  "        .timeline-item {" +
  "            margin-bottom: 2rem;" +
  "            display: flex;" +
  "            width: 100%;" +
  "            justify-content: flex-end;" +
  "            padding-right: 3rem;" +
  "            position: relative;" +
  "        }" +
  "" +
  "        .timeline-item:nth-child(odd) {" +
  "            align-self: flex-start;" +
  "            justify-content: flex-start;" +
  "            padding-left: 3rem;" +
  "            padding-right: 0;" +
  "        }" +
  "" +
  "        .timeline-item-content {" +
  "            background-color: var(--glass-bg-light);" +
  "            border: 1px solid var(--glass-border-light);" +
  "            padding: 1.5rem;" +
  "            border-radius: 0.5rem;" +
  "            box-shadow: 0 4px 6px var(--shadow-color-light);" +
  "            width: 45%;" +
  "            backdrop-filter: blur(10px); /* Glassmorphism effect */" +
  "            position: relative;" +
  "        }" +
  "" +
  "        body.dark-mode .timeline-item-content {" +
  "            background-color: var(--glass-bg-dark);" +
  "            border: 1px solid var(--glass-border-dark);" +
  "            box-shadow: 0 4px 6px var(--shadow-color-dark);" +
  "        }" +
  "" +
  "" +
  "        .timeline-item-content h3 {" +
  "            margin-top: 0;" +
  "        }" +
  "" +
  "        .timeline-item::after {" +
  "            content: '';" +
  "            position: absolute;" +
  "            top: 1rem; /* Adjust position of the dot */" +
  "            left: 50%;" +
  "            transform: translateX(-50%);" +
  "            width: 12px;" +
  "            height: 12px;" +
  "            background-color: var(--primary-color);" +
  "            border-radius: 50%;" +
  "            border: 3px solid var(--bg-color-light); /* Light mode border */" +
  "        }" +
  "         body.dark-mode .timeline-item::after {" +
  "             border: 3px solid var(--bg-color-dark); /* Dark mode border */" +
  "        }" +
  "" +
  "        .timeline-item:nth-child(odd)::after {" +
  "            left: auto;" +
  "            right: 0;" +
  "            transform: translateX(50%);" +
  "        }" +
  "" +
  "" +
  "        .team-cards {" +
  "            display: grid;" +
  "            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));" +
  "            gap: 2rem;" +
  "            margin-top: 3rem;" +
  "        }" +
  "" +
  "        .team-card {" +
  "            background-color: var(--glass-bg-light);" +
  "            border: 1px solid var(--glass-border-light);" +
  "            border-radius: 1rem;" +
  "            padding: 1.5rem;" +
  "            text-align: center;" +
  "            box-shadow: 0 4px 8px var(--shadow-color-light);" +
  "            backdrop-filter: blur(10px);" +
  "            transition: transform 0.5s, box-shadow 0.5s;" +
  "            cursor: pointer;" +
  "        }" +
  "        body.dark-mode .team-card {" +
  "            background-color: var(--glass-bg-dark);" +
  "            border: 1px solid var(--glass-border-dark);" +
  "            box-shadow: 0 4px 8px var(--shadow-color-dark);" +
  "        }" +
  "" +
  "" +
  "        .team-card:hover {" +
  "            transform: translateY(-10px) rotateX(10deg) rotateY(10deg);" +
  "            box-shadow: 0 8px 20px var(--primary-color);" +
  "        }" +
  "" +
  "        .team-card img {" +
  "            width: 80px;" +
  "            height: 80px;" +
  "            border-radius: 50%;" +
  "            margin-bottom: 1rem;" +
  "            object-fit: cover;" +
  "        }" +
  "" +
  "        .stats-counter {" +
  "            display: flex;" +
  "            justify-content: space-around;" +
  "            margin-top: 4rem;" +
  "            text-align: center;" +
  "        }" +
  "" +
  "        .stat-item {" +
  "            flex: 1;" +
  "        }" +
  "" +
  "        .stat-number {" +
  "            font-size: 2.5rem;" +
  "            font-weight: bold;" +
  "            color: var(--primary-color);" +
  "        }" +
  "" +
  "        .stat-label {" +
  "            font-size: 1rem;" +
  "            color: var(--secondary-color);" +
  "        }" +
  "" +
  "        /* Services Section */" +
  "        #services {" +
  "            background-color: var(--bg-color-dark);" +
  "            color: var(--text-color-dark);" +
  "            background-attachment: fixed; /* Parallax effect */" +
  "            background-position: center;" +
  "            background-size: cover;" +
  '            background-image: url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none"%3E%3Crect width="100" height="100" fill="rgba(0,0,0,0.1)"/%3E%3C/svg%3E\'); /* Dark subtle background */' +
  "        }" +
  "" +
  "" +
  "        .service-cards {" +
  "            display: grid;" +
  "            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));" +
  "            gap: 2rem;" +
  "            margin-top: 3rem;" +
  "        }" +
  "" +
  "        .service-card-container {" +
  "            perspective: 1000px; /* For 3D effect */" +
  "        }" +
  "" +
  "        .service-card {" +
  "            background-color: var(--glass-bg-dark);" +
  "            border: 1px solid var(--glass-border-dark);" +
  "            border-radius: 1rem;" +
  "            padding: 2rem;" +
  "            text-align: center;" +
  "            box-shadow: 0 6px 12px var(--shadow-color-dark);" +
  "            backdrop-filter: blur(10px);" +
  "            transform-style: preserve-3d;" +
  "            transition: transform 0.6s;" +
  "            cursor: pointer;" +
  "        }" +
  "" +
  "        .service-card:hover {" +
  "            transform: rotateY(20deg);" +
  "        }" +
  "" +
  "        .service-card i {" +
  "            font-size: 3rem;" +
  "            margin-bottom: 1rem;" +
  "            color: var(--primary-color);" +
  "        }" +
  "" +
  "        .service-card h3 {" +
  "            margin-top: 0;" +
  "            color: var(--text-color-light);" +
  "        }" +
  "" +
  "        .comparison-table {" +
  "            width: 100%;" +
  "            border-collapse: collapse;" +
  "            margin-top: 3rem;" +
  "            background-color: var(--glass-bg-dark);" +
  "            border-radius: 0.5rem;" +
  "            overflow: hidden; /* For rounded corners on table */" +
  "            border: 1px solid var(--glass-border-dark);" +
  "            backdrop-filter: blur(10px);" +
  "        }" +
  "" +
  "        .comparison-table th, .comparison-table td {" +
  "            padding: 1rem;" +
  "            text-align: center;" +
  "            border-bottom: 1px solid var(--glass-border-dark);" +
  "        }" +
  "" +
  "        .comparison-table th {" +
  "            background-color: rgba(0, 0, 0, 0.2);" +
  "            font-weight: bold;" +
  "        }" +
  "" +
  "        .comparison-table tr:last-child td {" +
  "            border-bottom: none;" +
  "        }" +
  "" +
  "        .testimonial-carousel {" +
  "            margin-top: 4rem;" +
  "            overflow: hidden;" +
  "            position: relative;" +
  "        }" +
  "" +
  "        .testimonial-slide {" +
  "            padding: 2rem;" +
  "            text-align: center;" +
  "            opacity: 0;" +
  "            visibility: hidden;" +
  "            position: absolute;" +
  "            top: 0;" +
  "            left: 0;" +
  "            width: 100%;" +
  "            transition: opacity 1s, visibility 1s;" +
  "        }" +
  "" +
  "        .testimonial-slide.active {" +
  "            opacity: 1;" +
  "            visibility: visible;" +
  "            position: relative; /* Allow content to flow normally */" +
  "        }" +
  "" +
  "        .testimonial-slide blockquote {" +
  "            font-size: 1.2rem;" +
  "            font-style: italic;" +
  "            margin-bottom: 1rem;" +
  "            color: var(--text-color-light);" +
  "        }" +
  "" +
  "        .testimonial-slide cite {" +
  "            font-weight: bold;" +
  "            font-style: normal;" +
  "            display: block;" +
  "        }" +
  "" +
  "        /* Contact Section */" +
  "        #contact {" +
  "            background-color: var(--bg-color-light);" +
  "            color: var(--text-color-light);" +
  "        }" +
  "        body.dark-mode #contact {" +
  "            background-color: var(--bg-color-dark);" +
  "            color: var(--text-color-dark);" +
  "        }" +
  "" +
  "" +
  "        .contact-form {" +
  "            background-color: var(--glass-bg-light);" +
  "            border: 1px solid var(--glass-border-light);" +
  "            border-radius: 1rem;" +
  "            padding: 2rem;" +
  "            box-shadow: 0 4px 8px var(--shadow-color-light);" +
  "            backdrop-filter: blur(10px);" +
  "            max-width: 600px;" +
  "            margin: 0 auto;" +
  "        }" +
  "        body.dark-mode .contact-form {" +
  "            background-color: var(--glass-bg-dark);" +
  "            border: 1px solid var(--glass-border-dark);" +
  "            box-shadow: 0 4px 8px var(--shadow-color-dark);" +
  "        }" +
  "" +
  "" +
  "        .form-group {" +
  "            margin-bottom: 1.5rem;" +
  "        }" +
  "" +
  "        .form-group label {" +
  "            display: block;" +
  "            margin-bottom: 0.5rem;" +
  "            font-weight: 600;" +
  "        }" +
  "" +
  "        .form-group input," +
  "        .form-group textarea {" +
  "            width: 100%;" +
  "            padding: 1rem;" +
  "            border: 1px solid var(--secondary-color);" +
  "            border-radius: 0.3rem;" +
  "            background-color: transparent; /* Inherit background for glass effect */" +
  "            color: inherit; /* Inherit text color */" +
  "            font-family: inherit;" +
  "            font-size: 1rem;" +
  "        }" +
  "" +
  "        .form-group textarea {" +
  "            resize: vertical;" +
  "            min-height: 150px;" +
  "        }" +
  "" +
  "        .submit-button {" +
  "            display: inline-block;" +
  "            padding: 1rem 2rem;" +
  "            background-color: var(--primary-color);" +
  "            color: var(--text-color-dark);" +
  "            font-size: 1.1rem;" +
  "            font-weight: 600;" +
  "            border: none;" +
  "            border-radius: 0.5rem;" +
  "            cursor: pointer;" +
  "            transition: background-color 0.3s, transform 0.3s;" +
  "            box-shadow: 0 5px 15px var(--shadow-color-light); /* Light mode shadow */" +
  "        }" +
  "        body.dark-mode .submit-button {" +
  "             box-shadow: 0 5px 15px var(--shadow-color-dark); /* Dark mode shadow */" +
  "        }" +
  "" +
  "" +
  "        .submit-button:hover {" +
  "            background-color: #228B22;" +
  "            transform: scale(1.05);" +
  "        }" +
  "" +
  "        .interactive-map {" +
  "            margin-top: 2rem;" +
  "            border-radius: 0.5rem;" +
  "            overflow: hidden;" +
  "            box-shadow: 0 4px 8px var(--shadow-color-light);" +
  "        }" +
  "         body.dark-mode .interactive-map {" +
  "             box-shadow: 0 4px 8px var(--shadow-color-dark);" +
  "        }" +
  "" +
  "" +
  "        .interactive-map iframe {" +
  "            width: 100%;" +
  "            height: 300px;" +
  "            border: 0;" +
  "        }" +
  "" +
  "        .social-icons {" +
  "            margin-top: 2rem;" +
  "            text-align: center;" +
  "        }" +
  "" +
  "        .social-icons a {" +
  "            display: inline-block;" +
  "            margin: 0 1rem;" +
  "            font-size: 1.5rem;" +
  "            color: var(--secondary-color);" +
  "            transition: color 0.3s, transform 0.3s;" +
  "        }" +
  "" +
  "        .social-icons a:hover {" +
  "            color: var(--primary-color);" +
  "            transform: scale(1.2);" +
  "        }" +
  "" +
  "        /* Dark Mode Toggle */" +
  "        .dark-mode-toggle {" +
  "            position: fixed;" +
  "            top: 2rem;" +
  "            right: 2rem;" +
  "            background-color: var(--glass-bg-light);" +
  "            border: 1px solid var(--glass-border-light);" +
  "            color: var(--text-color-light);" +
  "            padding: 0.5rem;" +
  "            border-radius: 0.3rem;" +
  "            cursor: pointer;" +
  "            z-index: 1000; /* Ensure it's on top */" +
  "            backdrop-filter: blur(10px);" +
  "            box-shadow: 0 2px 4px var(--shadow-color-light);" +
  "        }" +
  "        body.dark-mode .dark-mode-toggle {" +
  "            background-color: var(--glass-bg-dark);" +
  "            border: 1px solid var(--glass-border-dark);" +
  "            color: var(--text-color-dark);" +
  "            box-shadow: 0 2px 4px var(--shadow-color-dark);" +
  "        }" +
  "" +
  "" +
  "        .dark-mode-toggle i {" +
  "            font-size: 1.2rem;" +
  "        }" +
  "" +
  "        /* Custom Cursor (Example - Basic Circle) */" +
  "        body {" +
  '            cursor: url(\'data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="12" cy="12" r="10" fill="%2332CD32"/%3E%3C/svg%3E\'), auto; /* Replace with your custom cursor SVG */' +
  "        }" +
  "" +
  "        /* Mobile Responsiveness */" +
  "        @media (max-width: 768px) {" +
  "            .container {" +
  "                padding: 1rem;" +
  "            }" +
  "" +
  "            #hero h1 {" +
  "                font-size: 2.5rem;" +
  "            }" +
  "" +
  "            #hero p {" +
  "                font-size: 1.1rem;" +
  "            }" +
  "" +
  "            .timeline::before {" +
  "                left: 1rem;" +
  "            }" +
  "" +
  "            .timeline-item {" +
  "                padding-right: 1rem;" +
  "            }" +
  "" +
  "            .timeline-item:nth-child(odd) {" +
  "                padding-left: 1rem;" +
  "            }" +
  "" +
  "            .timeline-item-content {" +
  "                width: 90%;" +
  "            }" +
  "" +
  "            .timeline-item::after {" +
  "                left: 1rem;" +
  "            }" +
  "" +
  "            .timeline-item:nth-child(odd)::after {" +
  "                right: auto;" +
  "                left: 1rem;" +
  "                transform: translateX(0);" +
  "            }" +
  "" +
  "            .team-cards, .service-cards {" +
  "                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));" +
  "            }" +
  "" +
  "            .stats-counter {" +
  "                flex-direction: column;" +
  "                gap: 2rem;" +
  "            }" +
  "" +
  "            .stat-item {" +
  "                text-align: center;" +
  "            }" +
  "        }" +
  "" +
  "        /* Reduced Motion Preference */" +
  "        @media (prefers-reduced-motion: reduce) {" +
  "            .team-card:hover {" +
  "                transform: none; /* Disable 3D hover effect */" +
  "                box-shadow: 0 4px 8px var(--shadow-color-light); /* Revert to default shadow */" +
  "            }" +
  "            .service-card:hover {" +
  "                transform: none; /* Disable rotation effect */" +
  "            }" +
  "            .cta-button:hover {" +
  "                transform: none; /* Disable scale effect */" +
  "            }" +
  "            .social-icons a:hover {" +
  "                transform: none; /* Disable scale effect */" +
  "            }" +
  "        }" +
  "    </style>" +
  "    <!-- Montserrat & Poppins Fonts -->" +
  '    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">' +
  "</head>" +
  '<body id="home">' +
  "" +
  "    <!-- JSON-LD Schema Markup -->" +
  '    <script type="application/ld+json">' +
  "        {" +
  '          "@context": "https://schema.org",' +
  '          "@type": "Organization",' +
  '          "name": "donal",' +
  '          "url": "https://donal.com",  <!-- Replace with actual URL -->' +
  '          "email": "donal@mail.com",' +
  '          "telephone": "8989897765",' +
  '          "logo": "https://donal.com/logo.png", <!-- Replace with actual logo URL -->' +
  '          "sameAs": [  <!-- Add social media links if available -->' +
  '            "https://www.linkedin.com/company/donal",' +
  '            "https://www.facebook.com/donal"' +
  "          ]" +
  "        }" +
  "    </script>" +
  "" +
  "    <!-- Dark Mode Toggle Button -->" +
  '    <button class="dark-mode-toggle" onclick="toggleDarkMode()" aria-label="Toggle Dark Mode">' +
  '        <i class="fas fa-moon"></i> <i class="fas fa-sun"></i>' +
  "    </button>" +
  "" +
  "    <!-- Hero Section -->" +
  '    <section id="hero">' +
  '        <div class="container">' +
  "            <h1>Welcome to donal</h1>" +
  "            <p>Innovative solutions tailored to your needs. We build trustworthy and cutting-edge technology to drive your business forward.</p>" +
  '            <a href="#contact" class="cta-button animated-button">Get in Touch</a>' +
  '            <div class="scroll-indicator">' +
  '                <a href="#about" aria-label="Scroll to About Section"><i class="fas fa-chevron-down"></i></a>' +
  "            </div>" +
  "        </div>" +
  "    </section>" +
  "" +
  "    <!-- About Section -->" +
  '    <section id="about">' +
  '        <div class="container">' +
  "            <h2>About Us</h2>" +
  "            <p>donal is dedicated to providing innovative and reliable solutions. Our approach combines cutting-edge technology with a focus on building trust and long-term partnerships. We are passionate about helping our clients succeed in today's rapidly evolving world.</p>" +
  "" +
  "            <h3>Our Journey</h3>" +
  '            <div class="timeline">' +
  '                <div class="timeline-item">' +
  '                    <div class="timeline-item-content">' +
  "                        <h3>2018 - Foundation</h3>" +
  "                        <p>donal was founded with a vision to revolutionize the industry through innovative technology solutions.</p>" +
  "                    </div>" +
  "                </div>" +
  '                <div class="timeline-item">' +
  '                    <div class="timeline-item-content">' +
  "                        <h3>2020 - Expansion</h3>" +
  "                        <p>Expanded our service offerings and team to meet growing client demands.</p>" +
  "                    </div>" +
  "                </div>" +
  '                <div class="timeline-item">' +
  '                    <div class="timeline-item-content">' +
  "                        <h3>2023 - Innovation Leap</h3>" +
  "                        <p>Launched groundbreaking new services, solidifying our position as industry leaders in innovation.</p>" +
  "                    </div>" +
  "                </div>" +
  "            </div>" +
  "" +
  "            <h3>Meet Our Team</h3>" +
  '            <div class="team-cards">' +
  '                <div class="team-card">' +
  "                    <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23ddd'/%3E%3C/svg%3E\" alt=\"Team Member 1\" loading=\"lazy\">" +
  "                    <h3>John Doe</h3>" +
  "                    <p>Founder & CEO</p>" +
  "                </div>" +
  '                <div class="team-card">' +
  "                    <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23ddd'/%3E%3C/svg%3E\" alt=\"Team Member 2\" loading=\"lazy\">" +
  "                    <h3>Jane Smith</h3>" +
  "                    <p>Lead Developer</p>" +
  "                </div>" +
  '                <div class="team-card">' +
  "                    <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23ddd'/%3E%3C/svg%3E\" alt=\"Team Member 3\" loading=\"lazy\">" +
  "                    <h3>Peter Jones</h3>" +
  "                    <p>Marketing Manager</p>" +
  "                </div>" +
  "            </div>" +
  "" +
  '            <div class="stats-counter">' +
  '                <div class="stat-item">' +
  '                    <span class="stat-number" data-count="500">0</span><span class="stat-plus">+</span>' +
  '                    <p class="stat-label">Projects Completed</p>' +
  "                </div>" +
  '                <div class="stat-item">' +
  '                    <span class="stat-number" data-count="100">0</span><span class="stat-plus">+</span>' +
  '                    <p class="stat-label">Happy Clients</p>' +
  "                </div>" +
  '                <div class="stat-item">' +
  '                    <span class="stat-number" data-count="10">0</span><span class="stat-plus">+</span>' +
  '                    <p class="stat-label">Years of Experience</p>' +
  "                </div>" +
  "            </div>" +
  "        </div>" +
  "    </section>" +
  "" +
  "    <!-- Services Section -->" +
  '    <section id="services">' +
  '        <div class="container">' +
  "            <h2>Our Services</h2>" +
  "            <p>We offer a range of services designed to meet your technology needs and drive business growth. From strategy to implementation, we've got you covered.</p>" +
  "" +
  '            <div class="service-cards">' +
  '                <div class="service-card-container">' +
  '                    <div class="service-card">' +
  '                        <i class="fas fa-code"></i>' +
  "                        <h3>Web Development</h3>" +
  "                        <p>Custom web solutions tailored to your specific business requirements. Responsive, scalable, and user-friendly websites.</p>" +
  "                    </div>" +
  "                </div>" +
  '                <div class="service-card-container">' +
  '                    <div class="service-card">' +
  '                        <i class="fas fa-mobile-alt"></i>' +
  "                        <h3>Mobile App Development</h3>" +
  "                        <p>Native and cross-platform mobile applications for iOS and Android. Engaging and high-performance mobile experiences.</p>" +
  "                    </div>" +
  "                </div>" +
  '                <div class="service-card-container">' +
  '                    <div class="service-card">' +
  '                        <i class="fas fa-cloud"></i>' +
  "                        <h3>Cloud Solutions</h3>" +
  "                        <p>Secure and scalable cloud infrastructure and services. Migration, management, and optimization for cloud environments.</p>" +
  "                    </div>" +
  "                </div>" +
  "            </div>" +
  "" +
  "            <h3>Service Comparison</h3>" +
  '            <table class="comparison-table">' +
  "                <thead>" +
  "                    <tr>" +
  "                        <th>Service</th>" +
  "                        <th>Features</th>" +
  "                        <th>Pricing</th>" +
  "                        <th>Support</th>" +
  "                    </tr>" +
  "                </thead>" +
  "                <tbody>" +
  "                    <tr>" +
  "                        <td>Web Development</td>" +
  "                        <td>Custom Design, Responsive, SEO Optimized</td>" +
  "                        <td>Starting from $5000</td>" +
  "                        <td>6 Months Free Support</td>" +
  "                    </tr>" +
  "                    <tr>" +
  "                        <td>Mobile App Development</td>" +
  "                        <td>Native/Cross-Platform, UI/UX Design, App Store Deployment</td>" +
  "                        <td>Starting from $8000</td>" +
  "                        <td>3 Months Free Support</td>" +
  "                    </tr>" +
  "                    <tr>" +
  "                        <td>Cloud Solutions</td>" +
  "                        <td>Scalable Infrastructure, Security, 24/7 Monitoring</td>" +
  "                        <td>Custom Pricing</td>" +
  "                        <td>24/7 Premium Support</td>" +
  "                    </tr>" +
  "                </tbody>" +
  "            </table>" +
  "" +
  "            <h3>What Our Clients Say</h3>" +
  '            <div class="testimonial-carousel">' +
  '                <div class="testimonial-slide active">' +
  '                    <blockquote>"donal delivered exceptional results and exceeded our expectations. Their innovative approach and dedication are truly commendable."</blockquote>' +
  "                    <cite>- John Smith, CEO of Company X</cite>" +
  "                </div>" +
  '                <div class="testimonial-slide">' +
  '                    <blockquote>"Working with donal has been a game-changer for our business. Their expertise and commitment to quality are unmatched."</blockquote>' +
  "                    <cite>- Jane Doe, Marketing Director of Company Y</cite>" +
  "                </div>" +
  '                <div class="testimonial-slide">' +
  '                    <blockquote>"We highly recommend donal for their professionalism and innovative solutions. They are a trusted partner for our technology needs."</blockquote>' +
  "                    <cite>- Peter Jones, CTO of Company Z</cite>" +
  "                </div>" +
  "            </div>" +
  "        </div>" +
  "    </section>" +
  "" +
  "    <!-- Contact Section -->" +
  '    <section id="contact">' +
  '        <div class="container">' +
  "            <h2>Contact Us</h2>" +
  "            <p>Ready to discuss your project? Reach out to us using the form below or contact us directly.</p>" +
  "" +
  '            <div class="contact-form">' +
  '                <form action="#" method="POST">' +
  '                    <div class="form-group">' +
  '                        <label for="name">Name</label>' +
  '                        <input type="text" id="name" name="name" placeholder="Your Name" required>' +
  "                    </div>" +
  '                    <div class="form-group">' +
  '                        <label for="email">Email</label>' +
  '                        <input type="email" id="email" name="email" placeholder="Your Email" required>' +
  "                    </div>" +
  '                    <div class="form-group">' +
  '                        <label for="message">Message</label>' +
  '                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>' +
  "                    </div>" +
  '                    <button type="submit" class="submit-button">Send Message</button>' +
  "                </form>" +
  "            </div>" +
  "" +
  '            <div class="interactive-map">' +
  '                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.065893319245!2d-73.9855052845933!3d40.74881707929413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3d3ef8d%3A0x6f183042c20c300d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1679458095000!5m2!1sen!2sus"' +
  '                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Company Location"></iframe loading="lazy">' +
  "            </div>" +
  "" +
  '            <div class="social-icons">' +
  '                <a href="#" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
  '                <a href="#" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
  '                <a href="#" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>' +
  '                <a href="#" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
  "            </div>" +
  "        </div>" +
  "    </section>" +
  "" +
  "    <script>" +
  "        // Dark Mode Toggle Functionality" +
  "        function toggleDarkMode() {" +
  "            document.body.classList.toggle('dark-mode');" +
  "        }" +
  "" +
  "        // Stats Counter Animation" +
  "        const counters = document.querySelectorAll('.stat-number');" +
  "        counters.forEach(counter => {" +
  "            const target = parseInt(counter.getAttribute('data-count'));" +
  "            const increment = Math.ceil(target / 200); // Adjust speed as needed" +
  "            let count = 0;" +
  "" +
  "            function updateCount() {" +
  "                count += increment;" +
  "                counter.innerText = count;" +
  "" +
  "                if (count < target) {" +
  "                    requestAnimationFrame(updateCount);" +
  "                } else {" +
  "                    counter.innerText = target;" +
  "                }" +
  "            }" +
  "            updateCount();" +
  "        });" +
  "" +
  "        // Testimonial Carousel" +
  "        const slides = document.querySelectorAll('.testimonial-slide');" +
  "        let currentSlide = 0;" +
  "" +
  "        function showSlide(index) {" +
  "            slides.forEach(slide => slide.classList.remove('active'));" +
  "            slides[index].classList.add('active');" +
  "        }" +
  "" +
  "        function nextSlide() {" +
  "            currentSlide = (currentSlide + 1) % slides.length;" +
  "            showSlide(currentSlide);" +
  "        }" +
  "" +
  "        setInterval(nextSlide, 5000); // Change slide every 5 seconds, adjust as needed" +
  "    </script>" +
  "" +
  "</body>" +
  "</html>" +
  "";

const QuillEditorWithHover = () => {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      const editorElement = editor.root;

      const handleHover = (e) => {
        // Get the nearest HTML element at the mouse position
        const element = document.elementFromPoint(e.clientX, e.clientY);

        // Find the closest element with actual content (not just Quill containers)
        const contentElement = findContentElement(element);

        if (contentElement) {
          console.log("Hovered element:", contentElement);
          console.log("HTML:", contentElement.outerHTML);
          // You can return this element or do something with it
          return contentElement;
        }
        return null;
      };

      editorElement.addEventListener("mousemove", handleHover);

      return () => {
        editorElement.removeEventListener("mousemove", handleHover);
      };
    }
  }, []);

  // Helper function to find meaningful content elements
  const findContentElement = (element) => {
    while (element && element !== document.body) {
      // Check if element has actual content or is a meaningful Quill element
      if (
        element.classList.contains("ql-editor") ||
        element.tagName === "P" ||
        element.tagName === "H1" ||
        element.tagName === "H2" ||
        element.tagName === "LI" ||
        element.tagName === "A" ||
        element.classList.contains("ql-syntax") || // Code blocks
        element.classList.contains("ql-image") // Images
      ) {
        return element;
      }
      element = element.parentElement;
    }
    return null;
  };

  return (
    <div>
      <ReactQuill
        defaultValue={text}
        ref={quillRef}
        theme="snow"
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "code-block"],
          ],
        }}
      />
    </div>
  );
};

export default QuillEditorWithHover;
