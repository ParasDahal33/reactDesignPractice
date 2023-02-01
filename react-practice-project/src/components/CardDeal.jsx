import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section id="product" className={layout.section} >
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Find a better card deals <br className='sm:block hidden' /> in few easy steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                To find a better credit card deal, first assess your spending habits and look for cards that offer rewards or cashback for the types of purchases you make most often. Next, research different credit card options and compare the features and benefits of different cards. Read the fine print and make sure you understand the terms and conditions of the card to avoid any surprises.
            </p>
            <Button styles="mt-10" />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="card" className="w-[100%] h-[100p%]" />
        </div>
    </section>
)

export default CardDeal