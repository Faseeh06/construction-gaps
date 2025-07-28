export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 }
    },
}

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
}

export const logoAnimation = {
    initial: {
        opacity: 0,
        scale: 0.1,
        transformOrigin: "center center"
    },
    enter: {
        opacity: 1,
        scale: 0.6,
        transformOrigin: "center center",
        transition: { 
            duration: 1.5, 
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth scaling
            delay: 0.2
        }
    },
}