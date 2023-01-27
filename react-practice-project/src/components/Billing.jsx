import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
    <section id="product " className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5] " />
            <div className="ablsolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="ablsolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Easily control your <br className="sm:block hidden" /> bill & invoicing.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Easily controlling your bill and invoicing can help you manage your finances efficiently.
                It allows you to track expenses and income and avoid late fees and penalties.
                It also helps to identify discrepancies or errors in billing and invoicing.
                Overall, it helps to effectively manage your budget and avoid financial problems.
            </p>

            <div className="flex flex-row flex-wrap sm:wt-10 mt-6">
                <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                <img src={google} alt="google_store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
            </div>
        </div>
    </section>
)

export default Billing