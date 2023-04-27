/*
const allFiles = import.meta.glob("$lib/posts/*.md")
    const fileNames = [];
    for (const path in allFiles){

        const substring = path.substring(
            path.lastIndexOf("/") + 1,
            path.lastIndexOf(".")
        )
        console.log(substring)
        fileNames.push(substring)
    }
*/

import { fetchMarkdownPosts } from "$lib/utils"

async function fetchPosts(){
  const allPosts = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return (
      new Date(b.meta.date).getMilliseconds() -
      new Date(a.meta.date).getMilliseconds()
    );
  });

  return sortedPosts;
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const posts = await fetchPosts();

  return {
    posts,
  };
};
