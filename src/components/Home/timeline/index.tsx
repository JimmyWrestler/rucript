'use client'
import Image from 'next/image'
import { timelineData } from '@/app/api/data'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TimeLine = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }
  return (
    <section className='md:pt-40 pt-9' id='development'>
      <div className='container lg:px-16 px-4'>
        <div className='text-center'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <p className='text-muted sm:text-28 text-18 mb-9'>
              Таймлайн <span className='text-primary'>разработки</span>
            </p>
            <h2 className='text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20'>
              Мы можем подключиться на любом этапе или сопровождать вас на протяжении всего цикла разработки.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}>
            <div className='md:block hidden relative'>
              <div>
                <Image
                  src='/images/timeline/img-timeline.png'
                  alt='image'
                  width={1220}
                  height={1000}
                  className='w-80% mx-auto'
                />
              </div>
              <div className='absolute lg::top-40 top-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
                <div className='text-right'>
                  <h5 className='text-muted text-28 mb-3'>Планирование</h5>
                  <p className='text-18 text-muted/60'>
                    Определяем масштаб и архитектуру проекта
                  </p>
                </div>
                <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                  <Image
                    src='/images/timeline/icon-planning.svg'
                    alt='Planning'
                    width={44}
                    height={44}
                    className='w-16 h-16 '
                  />
                </div>
              </div>
              <div className='absolute lg:top-40 top-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
                <div className='bg-light_grey/45 backdrop-blur-xs p-6 h-fit rounded-full'>
                  <Image
                    src='/images/timeline/icon-refinement.svg'
                    alt='Refinement'
                    width={44}
                    height={44}
                  />
                </div>
                <div className='text-left'>
                  <h5 className='text-muted text-28 mb-3'>Доработка</h5>
                  <p className='text-18 text-muted/60'>
                    Улучшаем и дорабатываем ваше решение
                  </p>
                </div>
              </div>
              <div className='absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6'>
                <div className='text-right'>
                  <h5 className='text-muted text-28 mb-3'>Прототип</h5>
                  <p className='text-18 text-muted/60'>
                    Создаём рабочий прототип для тестирования продукта
                  </p>
                </div>
                <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                  <Image
                    src='/images/timeline/icon-prototype.svg'
                    alt='Prototype'
                    width={44}
                    height={44}
                    className='w-16 h-16 '
                  />
                </div>
              </div>
              <div className='absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6'>
                <div className='bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full'>
                  <Image
                    src='/images/timeline/icon-support.svg'
                    alt='Scale and support'
                    width={44}
                    height={44}
                    className='w-16 h-16'
                  />
                </div>
                <div className='text-left'>
                  <h5 className='text-muted text-nowrap text-28 mb-3'>
                    Поддержка
                  </h5>
                  <p className='text-18 text-muted/60'>
                    Внедряем продукт и обеспечиваем полную поддержку
                  </p>
                </div>
              </div>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 md:hidden'>
              {timelineData.map((item, index) => (
                <div key={index} className='flex items-center gap-6'>
                  <div className='bg-light_grey/45 p-6 rounded-full'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className='text-start'>
                    <h4 className='text-28 text-muted mb-2'>{item.title}</h4>
                    <p className='text-muted/60 text-18'>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine