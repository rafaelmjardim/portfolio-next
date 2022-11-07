import Script from "next/script";

const ScriptGA = () => {
    return (
        <>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7RFG93YESW"></Script>
                <Script>
                
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-7RFG93YESW');`}
                </Script>
        </>
    );
}

export default ScriptGA;