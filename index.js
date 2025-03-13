const testimonials = [
    {
        name: 'Sophie Doe',
        photoUrl: 'https://plus.unsplash.com/premium_photo-1683120884955-f640fec7fba5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "As a beginner coder, I was intimidated by the prospect of building a website. But this practice page made the whole process surprisingly easy! The instructions were clear, the tools were intuitive, and I felt empowered to create something I'm actually proud of. I highly recommend this resource for anyone looking to learn coding in a fun and accessible way!"
    },
    {
        name: 'Dexter Smith',
        photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "This practice coding page exceeded my expectations! I started with very little coding experience, and now I feel confident enough to tackle more complex projects. The resources provided were comprehensive, the community was supportive, and the overall learning experience was truly rewarding. I'm so grateful for this amazing tool!"
    },
    {
        name: 'Jhon Snow',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "The structured approach to learning on this practice page is excellent. I particularly appreciated the way it introduced [Specific Coding Concept, e.g., HTML, CSS, JavaScript] in a logical and progressive manner. The ability to test my code in real-time was invaluable, and the clear explanations of error messages helped me debug effectively. This is a valuable resource for anyone serious about improving their coding skills."
    }
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 10000);
}