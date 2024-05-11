<template>
  <nav>
    <h1 class="text-4xl">Typle</h1>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Play</a></li>
      <li><a href="">Rankings</a></li>
      <li><a href="">Cretae</a></li>
      <li><a href="">Edit</a></li>
      <li><a href="">About</a></li>
    </ul>
  </nav>
  <main>
    <section id="playArea">
      <div id="wordDisplay">Hello, World</div>
      <input type="text" class="wordInputField" />
      <section id="wordList">
        <h1>Words</h1>
        <span>hoge</span>
        <span>foo</span>
        <span>bar</span>
        <span>vue</span>
        <span>react</span>
      </section>
    </section>
    <section id="rankings">
      <table>
        <tr>
          <td>No.</td>
          <td>Time</td>
          <td>Words</td>
          <td>Date</td>
        </tr>
        <tr>
          <td>1</td>
          <td>12seconds</td>
          <td>5 words</td>
          <td>{{ new Date().toLocaleString() }}</td>
        </tr>
        <tr>
          <td>1</td>
          <td>12seconds</td>
          <td>5 words</td>
          <td>{{ new Date().toLocaleString() }}</td>
        </tr>
      </table>
    </section>
    <section id="selectWordList">
      <table>
        <tr>
          <td>
            <span>Name</span>
          </td>
          <td>
            <span>Length</span>
          </td>
          <td>
            <span>Action</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>Vue 3</span>
          </td>
          <td>
            <span>4 words</span>
          </td>
          <td>
            <button>Select</button>
          </td>
        </tr>
      </table>
    </section>
  </main>
</template>
