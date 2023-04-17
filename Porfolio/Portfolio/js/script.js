 
let activeIndex = 0;

const groups = document.getElementsByClassName("article-section");

const handleRightArrow = () => {
  const nextIndex = activeIndex + 1 === 3 ? 0 : activeIndex + 1;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
        
  const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  console.log(nextIndex);
  currentGroup.dataset.status = "after";
  
  nextGroup.dataset.status = "active-from-right";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleLeftArrow = () => {
    const nextIndex = activeIndex - 1 < 0 ? 2 : activeIndex - 1;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
        
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    
    console.log(nextIndex);
    currentGroup.dataset.status = "before";
    
    nextGroup.dataset.status = "active-from-left";
    
    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
} 

// javascript logic referenced from https://www.youtube.com/watch?v=6TYkDy54q4E&t=481s
