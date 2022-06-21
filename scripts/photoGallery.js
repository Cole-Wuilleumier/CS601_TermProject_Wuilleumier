/** Photo Page 
 * This Vue component works with the Photo page.
 * It loads photos into the view and diplays them both as single images and as a gallery view.
 * The buttons allow the user to switch images, as well as, switch between normal and gallery view.
 * 
 */
const app = new Vue({
    el: '#photoApp',
    data: {
        currentImage: 0,
        multiView:false,
        images: [
            {link:'./images/photo_gallery/cole_desert.jpg', alt:'Cole dancing in the Black Rock Desert in Nevada', title:'Cole dancing in the Black Rock Desert in Nevada'},
            {link:'./images/photo_gallery/cole_desert_2.jpg', alt:'Cole in the Badlands, South Dakota', title:'Cole in the Badlands, South Dakota'},
            {link:'./images/photo_gallery/cole_seattle.jpg', alt:'Cole giving peace-sign in Space Needle in Seattle, WA', title:'Cole giving peace-sign in Space Needle in Seattle, WA'},
            {link:'./images/photo_gallery/cole_suiteworld.jpg', alt:'Cole at SuiteWorld in Las Vegas, NV', title:'Cole at SuiteWorld in Las Vegas, NV'},
            {link:'./images/photo_gallery/cole_swimming.jpg', alt:'Cole swimming in Donner lake in Truckee, CA', title:'Cole swimming in Donner lake in Truckee, CA'},
            {link:'./images/photo_gallery/cole_fiddle.jpg', alt:'Cole playing violin in Brewster, MA', title:'Cole playing violin in Brewster, MA'},
            {link:'./images/photo_gallery/cole_rigid_biking.jpg', alt:'Cole standing with full-rigid mountain bike in Truckee, CA', title:'Cole standing with full-rigid mountain bike in Truckee, CA'},
            {link:'./images/photo_gallery/cole_river.jpg', alt:'Cole standing on rock in the Yuba River in Grass Valley, CA', title:'Cole standing on rock in the Yuba River in Grass Valley, CA'},
            {link:'./images/photo_gallery/cole_laughing.jpg', alt:'Cole laughing in Providence, RI', title:'Cole laughing in Providence, RI'},
            {link:'./images/photo_gallery/cole_megadesk.jpg', alt:'Cole working diligently behind mega-desk in Providence, RI', title:'Cole working diligently behind mega-desk in Providence, RI'},
            {link:'./images/photo_gallery/cole_megadesk_happy.jpg', alt:'Cole giving thumbs up while working behind mega-desk', title:'Cole giving thumbs up while working behind mega-desk'},
            {link:'./images/photo_gallery/cole_pnw.jpg', alt:'Cole wearing rain gear in La Conner, WA', title:'Cole wearing rain gear in La Conner, WA'},
            {link:'./images/photo_gallery/cole_road.jpg', alt:'Cole standing in front of Cole Road sign in Providence, RI', title:'Cole standing in front of Cole Road sign in Providence, RI'},
            {link:'./images/photo_gallery/cole_san_francisco.jpg', alt:'Cole giving peace-sign in San Francisco, CA', title:'Cole giving peace-sign in San Francisco, CA'},
            {link:'./images/photo_gallery/cole_skating.jpg', alt:'Cole ready to shred a bowl in Watertown, Rhode Island', title:'Cole ready to shred a bowl in Watertown, Rhode Island'},
            {link:'./images/photo_gallery/cole_band.jpg', alt:'Cole playing guitar with Kid Mountain in Cambridge, MA', title:'Cole playing guitar with Kid Mountain in Cambridge, MA'},
            {link:'./images/photo_gallery/cole_band_video.jpg', alt:'Cole playing guitar with Kid Mountain in Providence, RI', title:'Cole playing guitar with Kid Mountain in Providence, RI'},
            {link:'./images/photo_gallery/cole_working.jpg', alt:'Cole working very hard in Providence, RI', title:'Cole working very hard in Providence, RI'}
        ]
    },

    methods: {
        nextImage: function(){
            if(this.currentImage < this.images.length - 1){
                this.currentImage = this.currentImage + 1;
            }
        },
        lastImage: function(){
            if(this.currentImage > 0){
                this.currentImage = this.currentImage - 1;
            }
        },
        enableGalleryView: function(){
            this.multiView = true;
        },
        disableGalleryView: function(){
            this.multiView = false;
        },
        switchImage: function(i){
            this.multiView = false;
            this.currentImage = i;
        }
    }
});