function getDogImages(inputValue) {
    console.log($('#numberOfDogs').val());
    inputValue = $('#numberOfDogs').val();
    fetch(`https://dog.ceo/api/breeds/image/random/${inputValue}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Please try again.'));
  }

  function displayResults(responseJson) {
      console.log(responseJson);
      let arrayOfImg = responseJson.message;
      $('.results-img').html(getImages(arrayOfImg));
      $('.results').removeAttr('hidden');
  }

  function getImages(arrayOfImg) {
      let imagesToReturn = '';
      for (let i = 0; i < arrayOfImg.length; i++) {
          imagesToReturn += `<img src="${arrayOfImg[i]}" class="js-results-img">`;
      }
      console.log(imagesToReturn);
      return imagesToReturn;
  }
  
  function handleSubmitButton() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImages();
    });
  }

  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    handleSubmitButton();
  })