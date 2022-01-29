import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { _Animation_PageTransition } from '../globals'

const LoftCard = ({ loftID }) => {
    return (
        <>

            <Link href={`./lofts/${loftID}`}>
                <div class="card card-bordered cursor-pointer">
                    <figure className='overflow-hidden'>
                        <img className='h-40 object-cover' src="https://picsum.photos/id/1005/400/250" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title"> AS Golden Pigeon Race </h2>
                        <div className='flex flex-col gap-3'>
                            <div className='grid grid-cols-2 text-sm'>
                                <p>Operator</p>
                                <p>George and Dimitrios Aslanidis</p>
                            </div>
                            <div className='grid grid-cols-2 text-sm'>
                                <p>Registered Pigeons</p>
                                <p>996</p>
                            </div>
                            <div className='grid grid-cols-2 text-sm'>
                                <p>Website</p>
                                <p>www.aspigeons.com</p>
                            </div>
                        </div>
                        <div class="justify-end card-actions">
                            <Link href={`./lofts/${loftID}`}>
                                <button class="btn btn-secondary">More info</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

const Lofts = e => {
    return (
        <>
            <motion.div
                variants={_Animation_PageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                className="min-h-screen px-5 md:px-10 lg:px-40 pt-28 mb-10"
            >
                {/* current Races */}
                <p className="text-4xl">Registered Lofts</p>
                <p className="my-3">This is where all registered lofts are listed</p>

                <div className="form-control w-1/2 mt-10">
                    <label className="label">
                        <span className="label-text">Filter Search</span>
                    </label>
                    <input type="text" placeholder="Loft Name" className="input input-bordered" />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-5'>
                    <LoftCard loftID={11010101} />
                    <LoftCard loftID={11010101} />
                    <LoftCard loftID={11010101} />
                    <LoftCard loftID={11010101} />
                    <LoftCard loftID={11010101} />
                </div>
            </motion.div>
        </>
    )
}

export default Lofts