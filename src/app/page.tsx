export default function Home() {
    const imageUrls = [
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F9b%2FPhoto_of_a_kitten.jpg&f=1&nofb=1&ipt=3d36f23a9d174472973544bcb5fc8ed76907a252bd659eb72d88ef4782405768&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthewowstyle.com%2Fwp-content%2Fuploads%2F2015%2F04%2Fcat1.jpg&f=1&nofb=1&ipt=e6166fa72e3dc94746c5d395425f29f1b0e02e80e8e4937027badd1524109fa3&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-e9iaysd5X1E%2FUDJmovqjrYI%2FAAAAAAAAAaE%2FlQVAJcSeCtA%2Fs1600%2Fcatpicturess%2B(4).jpg&f=1&nofb=1&ipt=b2de57454a00b78a2572135b60b0c5ee4dba39cf381f3bde1840b26f128e8aa5&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.suwalls.com%2Fwallpapers%2Fanimals%2Fcute-kitten-37952-2880x1800.jpg&f=1&nofb=1&ipt=0aac34238b4a76f5698d2a4fcbc07f1ffca41aa10052997c086cdd8612bb3556&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DGu9im2kr0eKsYb4EkI7ZQHaEo%26pid%3DApi&f=1&ipt=3da6002151b4fee717a3ff525c814a198f547e2455915ff2f9dbf6644d7ceb18&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F20787%2Fpexels-photo.jpg%3Fcs%3Dsrgb%26dl%3Danimal-cat-adorable-20787.jpg%26fm%3Djpg&f=1&nofb=1&ipt=37b69a287a1d4c170cab78002915d218da19dcb01dbd3a33ade00d949898d0c7&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2882348.jpg&f=1&nofb=1&ipt=5935ffab111722ba236d4da4877570eb002ceb64f87ea84c7ab89f95ce3aec89&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.pxhere.com%2Fphotos%2Fb8%2F5a%2Fcat_baby_cats-1210151.jpg!d&f=1&nofb=1&ipt=73ad1c02e14af6e7a6ce6f5bbc107149c0dd02d5abe3c3a8eb5a145dbc35707c&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.RH2gc-Oe1qSvCjD3IRYAyQHaE7%26pid%3DApi&f=1&ipt=a14870f5cacaac593918de2822a8a357e77e409366a6ed5403986ce9c30bf8c0&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.popsugar-assets.com%2Ffiles%2Fthumbor%2FNqNuXTlogEUiTZkp05Q1aYwZT28%2Ffit-in%2F2048xorig%2Ffilters%3Aformat_auto-!!-%3Astrip_icc-!!-%2F2014%2F03%2F14%2F962%2Fn%2F1922243%2Ffecc0749267c3e33_shutterstock_82322182.jpg&f=1&nofb=1&ipt=17d37f71bd79876b09ed6227e64454243b4315b3568088c57df5e99290817cd1&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.osmpic.com%2Fwp-content%2Fuploads%2F2019%2F05%2FPicsArt_05-17-10.34.04.jpg&f=1&nofb=1&ipt=51710902fb269c9eccf0674e334c0ec51b4b96491763684f6621bfb9075e045b&ipo=images",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fetchfind.com%2Fblog%2Fwp-content%2Fuploads%2F2017%2F08%2Fcat-2734999_1920-5-common-cat-sounds.jpg&f=1&nofb=1&ipt=94d25d47d48500a4fd997edbb80e5eacde17a6be52dfea210d0f29fd81e5f879&ipo=images"
    ]

    let i = 0;

    return (
        <main>
            <h1 className="text-5xl text-center m-5">Kočková stránka (pro Elišku)</h1>
            <div className="flex justify-between items-center flex-wrap">
                {imageUrls.map(url => {
                    let c = <img alt="kocka" key={i} src={url} width="150px" height="150px" className="m-2 rounded-2xl"/>;
                    i++;
                    return c;
                })}
            </div>
        </main>
    );
}
