var merge = function(nums1, m, nums2, n) {
    var nums2_last=n-1;
    var nums1_last=m-1 >=0 ? m-1 : nums1.length-1;
    var write_at=nums1.length-1;

    while(nums1_last>=0 && nums2_last>=0) {
        if(nums1[nums1_last]<=nums2[nums2_last]) {
            nums1[write_at]=nums2[nums2_last];
            nums2_last--;
        } else {
            nums1[write_at]=nums1[nums1_last];
            nums1_last--;
        }
        write_at--;
    }

    while(nums2_last>=0) {
        nums1[write_at]=nums2[nums2_last];
        nums2_last--;
        write_at--;
    }
};

//var nums1=[1,2,3,0,0,0];
//merge(nums1,3,[2,5,6],3)
//console.log(nums1)

var nums1=[0,0,0,0,0];
merge(nums1,0,[1,2,3,4,5],5)
console.log(nums1)