/**
 * Tiny Photo Gallery
 * This Vue component is used on the Music page to dispplay a small photo gallery.
 * The images are clickable, allowig the user to see a gallery view image closer.
 */
const app = new Vue({
    el: '#tinyPhotoGalleryApp',
    data: {
        currentImage: 0,
        multiView:true,
        images: [
            {link:'./images/kid_mountain/km_on_stage.jpg', alt:'Kid Mountain playing the MET in Providence, RI', title:'Kid Mountain playing the MET in Providence, RI'},
            {link:'./images/kid_mountain/KMHouseprty.jpg', alt:'Kid Mountain at a house party in Boston', title:'Kid Mountain at a house party in Boston'},
            {link:'./images/kid_mountain/kid_mtn_massart.jpg', alt:'Kid Mountain at Massart in Boston', title:'Kid Mountain at Massart in Boston'},
            {link:'./images/kid_mountain/km_in_the_lights.jpg', alt:'Kid Mountain in Boston', title:'Kid Mountain in Boston'},
            {link:'./images/kid_mountain/jamming_km.jpg', alt:'Early Kid Mountain at the Fete Providence', title:'Early Kid Mountain at the Fete Providence'},
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
        },
        switchBack: function(){
            this.multiView = true;
        }
    }
});