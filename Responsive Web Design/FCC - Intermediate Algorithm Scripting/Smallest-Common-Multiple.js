function smallestCommons(arr) {
    let a = [];
    for(let i = Math.min(arr[0],arr[1]) ; i <= Math.max(arr[0],arr[1]) ; i++){
      a.push(i);
    }
    let j =  Math.max(arr[0],arr[1]);
      let check= [];
    do{
      check = a.map( elem => j % elem);
      j++;
    }while (check.some(elem => elem !== 0 )) ;
  
    return j-1;
    
  }
  
  
  console.log(smallestCommons([1,5]));

//   smallestCommons([1, 5]) should return a number.

// Passed
// smallestCommons([1, 5]) should return 60.

// Passed
// smallestCommons([5, 1]) should return 60.

// Passed
// smallestCommons([2, 10]) should return 2520.

// Passed
// smallestCommons([1, 13]) should return 360360.

// Passed
// smallestCommons([23, 18]) should return 6056820.