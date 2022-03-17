<template>
 <div>
    <div class="main-content">
      <SearchBar />
      <AdminAddUser />

      <UserCard>
        John Doe <br>
        johndoe@gmail.com
      </UserCard>
      <UserCard>
        Mickeal Doe <br>
        Mickealdoe@gmail.com
      </UserCard>
      <UserCard>
        Corentin Doe <br>
        Corentindoe@gmail.com
      </UserCard>
      <UserCard>
        Joni Doe <br>
        Jonidoe@gmail.com
      </UserCard>
      <UserCard>
        James Doe <br>
        Jamesdoe@gmail.com
      </UserCard>

    </div>
  </div>
</template>

<style scoped>
  .main-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    margin: auto;
    width: 850px;
    height: 95%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
</style>
