import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const EVENTS_DATA = [
  {
    title: 'Boarding',
    time: '8:45PM',
    active: true,
  },
  {
    title: 'Boarding closes',
    time: '9:15PM',
  },
  {
    title: 'Departure',
    time: '9:30PM',
  },
];

const container = {
  hidden: { },
  show: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 2.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className='h-screen grid place-items-center'>
      <div
        style={{ borderRadius: 20 }}
        className='bg-zinc-50 border-2 relative min-h-[300px] border-zinc-100 overflow-hidden p-4 w-full max-w-md grid grid-cols-1 gap-4'
      >
        <div className='flex items-start justify-between'>
          <div className='pt-2'>

          <img src='/plane.png' alt='place' />
          </div>
          <div className='flex flex-col items-end gap-4'>
            <img
              src='/aircanada.png'
              className='w-[9rem] h-auto'
              alt='aircanada'
            />

            <div className='flex flex-col text-right'>
              <h2 className='font-semibold'>AC287 &bull; Gate E7</h2>
              <p className='text-gray-800'>Toronto -&gt; Paris</p>
              <p className='text-xs text-zinc-400 font-medium'>
                <span className='text-green-400 text-lg'>&bull;</span> On time
              </p>
            </div>
          </div>
        </div>

        <motion.div
          layout
          onClick={() => setOpen(!open)}
          tabIndex={0}
          transition={{
            ease: 'easeOut',
            duration: 0.3,
          }}
          style={{ borderRadius: 20 }}
          className={cn('bg-zinc-900 p-4 overflow-hidden flex flex-col gap-4', {
            'absolute inset-4 z-10': open,
          })}
        >
          <motion.div layout className='flex items-center justify-between'>
            <p className='text-zinc-400 text-sm'>
              Boarding <span className='text-xs text-red-400'>&bull;</span>{' '}
              <span className='text-xs text-red-400'>5m left</span>
            </p>
            <p className='text-white text-sm'>Gate closes at 9:15PM</p>
          </motion.div>
          <motion.div initial='hidden' className='mt-auto' animate='show'>
            <AnimatePresence>
              {!open ? (
                <motion.div
                  layout='preserve-aspect'
                  transition={{
                    ease: 'easeOut',
                  }}
                  className='flex justify-end gap-1'
                >
                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-1'>
                      {Array.from({ length: 6 }).map((_, i) => {
                        if (i === 5) {
                          return (
                            <motion.div
                              key={i}
                              className='h-7 w-1.5 rounded-md bg-zinc-800 relative overflow-hidden'
                            >
                              <motion.div
                                animate={{
                                  y: [22, 10],
                                }}
                                transition={{
                                  repeat: Infinity,
                                  duration: 0.9,
                                  ease: 'easeOut',
                                  repeatType: 'mirror',
                                  repeatDelay: 2.5,
                                }}
                                className='absolute inset-0 bg-red-500 rounded-md translate-y-5 origin-bottom'
                              ></motion.div>
                            </motion.div>
                          );
                        }
                        return (
                          <div
                            key={i}
                            className='h-7 w-1.5 rounded-md bg-zinc-800'
                          ></div>
                        );
                      })}
                    </div>
                    <p className='text-xs text-zinc-500'>8:45PM</p>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='flex flex-row gap-1'>
                      {Array.from({ length: 2 }).map((_, i) => {
                        if (i === 1) {
                          return (
                            <div
                              key={i}
                              className='h-7 w-9 bg-zinc-600 rounded-md'
                            />
                          );
                        }
                        return (
                          <div
                            key={i}
                            className='h-7 w-1.5 bg-red-500 rounded-md relative'
                          >
                            <span className='absolute inset-0 bg-red-500 animate-ping ease-out rounded-lg' />
                          </div>
                        );
                      })}
                    </div>
                    <p className='text-xs text-zinc-500'>9:15PM</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  layout
                  variants={container}
                  initial='hidden'
                  animate='show'
                  transition={{
                    ease: 'easeOut',
                  }}
                  className='flex flex-col gap-4'
                >
                  {EVENTS_DATA.map((event, i) => (
                    <motion.div
                      variants={item}
                      key={event.title}
                      transition={{
                        ease: 'easeOut',
                        delay: 0.1 * (i + 1),
                      }}
                      className='flex items-center justify-between'
                    >
                      <div className='flex items-center gap-3'>
                        <div
                          className={cn('w-2.5 h-7 rounded-md bg-zinc-600', {
                            'bg-red-500': event.active,
                          })}
                        />
                        <p
                          className={cn('text-base text-zinc-500', {
                            'text-white font-medium': event.active,
                          })}
                        >
                          {event.title}
                        </p>
                      </div>
                      <p
                        className={cn('text-base text-zinc-500', {
                          'text-white font-medium': event.active,
                        })}
                      >
                        {event.time}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
