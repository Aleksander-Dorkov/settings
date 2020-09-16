--framer motion

                <motion.button
                    initial={{x: '-100vw', y: 50, opacity: 1}}  - componentWillMount()
                    animate={{x: 240, y: -30, opacity: 1, scale: 1.7}} - componentDidMount()
                    exit={{x: '100vw', opacity: 0}} -1.7}} - componentWillDismount()
                    transition={{delay: 0, duration: 2}} - how long?
                    whileHover={{scale: 1.5, color: 'red'}} - while hover
                >
                    button
                </motion.button>

//variants
    const variant = {
        initial: {x: '-100vw', y: 50, opacity: 1},
        animate: {x: 240, y: -30, opacity: 1, scale: 2.4, transition: {delay: 0, duration: 3}},
        exit: {x: '100vw', opacity: 0},
        whileHover: {scale: 1.5, color: 'red', transition: {delay: 0, duration: 3}}
    } as Variants
             <motion.button
                 variants={variant}
                 initial='initial'
                 animate='animate'
                 exit='exit'
                 whileHover='whileHover'
                >
                  button
              </motion.button>
