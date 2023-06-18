class JobService{


    static  checkImageURL(url){

        if(!url) return false;

                const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
                return pattern.test(url);

    }


}
export default JobService;