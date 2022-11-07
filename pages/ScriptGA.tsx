import Script from "next/script";

const ScriptGA = () => {
    return (
        <>
                 {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-7RFG93YESW"></script>
                <script>
                
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-7RFG93YESW');`}
                </script>
        </>
    );
}

export default ScriptGA;