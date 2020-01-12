export default (videos, { text }) => {
    return videos.filter((video) => {
      const textMatch = video.description.toLowerCase().includes(text.toLowerCase());
  
      return textMatch;
    });
};