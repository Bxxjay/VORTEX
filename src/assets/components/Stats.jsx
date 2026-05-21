import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function CountUp({ target, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;

                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        const value = progress * target;

                        setCount(
                            target % 1 !== 0
                                ? value.toFixed(1)
                                : Math.floor(value)
                        );

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [target, duration]);

    return <span ref={ref}>+{count}</span>;
}

export default function Stats({ darkMode }) {
    const stats = [
        { value: 4.8, label: "AVERAGE RATING" },
        { value: 7000, label: "SNEAKERS SOLD" },
        { value: 500, label: "WORLDWIDE CLIENTS" },
    ];

    return (
        <section
            className={`py-16 px-8 md:px-16 transition-colors duration-300 ${
                darkMode ? "bg-[#0a0a0a]" : "bg-[#f5f5f5]"
            }`}
        >
            <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-20 text-center">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.4 + i * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <span
                            className={`text-4xl sm:text-5xl font-black ${
                                darkMode ? "text-white" : "text-black"
                            }`}
                        >
                            <CountUp target={stat.value} />
                        </span>

                        <span
                            className={`text-xs mt-2 leading-tight tracking-wider ${
                                darkMode ? "text-gray-500" : "text-gray-400"
                            }`}
                        >
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}