document.getElementById('comment-btn').addEventListener('click', function(){
    // Get Value....
    const fName = document.getElementById('fName');
    const getfName = fName.value;

    const jobTitle = document.getElementById('title');
    const getJobTitle = jobTitle.value;

    const commentbox = document.getElementById('commentArea');
    const getCommnet = commentbox.value;
    
    
    const commentBox = document.getElementById('comment-container');
    

    const reviewBox = document.createElement('div');
    reviewBox.classList.add('review-box');
    const h4 = document.createElement('h4');
    h4.innerText = getfName;
    

    const small = document.createElement('small');
    small.innerText = getJobTitle;
    

    const p = document.createElement('p');
    p.innerText = getCommnet;
    


    reviewBox.appendChild(h4);
    reviewBox.appendChild(small);
    reviewBox.appendChild(p);

    

    commentBox.appendChild(reviewBox);

    fName.value = '';
    jobTitle.value = '';
    commentbox.value = '';
});

