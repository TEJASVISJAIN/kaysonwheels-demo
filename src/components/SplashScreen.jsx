import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';

const SplashScreen = ({ onComplete }) => {
    const [isPresent, setIsPresent] = useState(true);

    useEffect(() => {
        // Total duration of splash screen
        const timer = setTimeout(() => {
            setIsPresent(false);
            setTimeout(onComplete, 800); // Wait for exit animation
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isPresent && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '#0f172a', // Dark blue/slate background
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                        color: 'white'
                    }}
                >
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        {/* Rotating Gear / Rim Effect Backdrop */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                border: '2px dashed rgba(212, 175, 55, 0.3)', // Gold dashed line
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '260px',
                                height: '260px',
                                borderRadius: '50%',
                                border: '4px solid rgba(255, 255, 255, 0.1)',
                                borderTopColor: '#D4AF37', // Gold accent
                            }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Logo Reveal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            style={{ zIndex: 2, textAlign: 'center' }}
                        >
                            <img src={logo} alt="Kayson Wheels" style={{ maxWidth: '180px', marginBottom: '20px' }} />

                            {/* Text Reveal */}
                            <motion.div
                                style={{ overflow: 'hidden' }}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                            >
                                <h1 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    letterSpacing: '4px',
                                    color: '#f8fafc',
                                    textTransform: 'uppercase',
                                    whiteSpace: 'nowrap',
                                    margin: 0
                                }}>
                                    Kayson Wheels
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.7 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                                style={{
                                    marginTop: '10px',
                                    letterSpacing: '2px',
                                    fontSize: '0.9rem',
                                    color: '#cbd5e1'
                                }}
                            >
                                PREMIUM AUTOMOTIVE PARTS
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
