import css from "../../styles/Clock.module.css"

export default function Clock() {
    return (
        <main>
            <h1 className={css.hd}>Some Clock Page</h1>
            <div>
                <div className={css.clock}>
                    <div className={css.hour}>
                        <div className={css.hr} id={css.hr}/>
                    </div>
                    <div className={css.min}>
                        <div className={css.mn} id={css.mn}/>
                    </div>
                    <div className={css.sec}>
                        <div className={css.sc} id={css.sc}/>
                    </div>
                </div>
            </div>
        </main>
    )
}
