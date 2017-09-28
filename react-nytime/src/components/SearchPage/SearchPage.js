import React from 'react';

const SearchPage = () =>
<SearchPage>
  <div class="container" style="background-color: white; border-style: solid; border-width: 1px;">

  <!-- Search Form -->
  <div class="panel panel-default">

    <div class="panel-heading">
      <h3 class="panel-title text-center" style="font-size: 20px;"><i><b>Search</b></i></h3>
    </div>

    <div class="panel-body text-center">
      <form role="form">

        <div class="form-group">
          <label for="topic" class="text-center">Topic</label>
          <input type="text" class="form-control" id="topic"></input>
        </div>

        <div class="form-group">
          <label for="startYear">Start Year</label>
          <input type="text" class="form-control" id="startYear"></input>
        </div>

        <div class="form-group">
          <label for="endYear">End Year</label>
          <input type="text" class="form-control" id="endYear"></input>
        </div>

        <button type="submit" class="btn btn-danger" id="searchBtn">Search</button>

      </form>
    </div>
  </div>
  <!-- Results -->
      <div class="panel panel-default">

        <div class="panel-heading">
          <h3 class="panel-title text-center" style="font-size: 20px;"><i><b>Results</b></i></h3>
        </div>
      </div>
  <!-- Saved Articles -->
      <div class="panel panel-default">

        <div class="panel-heading">
            <h3 class="panel-title text-center" style="font-size: 20px;"><i><b>Saved Articles</b></i></h3>
        </div>
      </div>

  </div>
</SearchPage>

export default SearchPage;
