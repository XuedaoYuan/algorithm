/* 
  leetcode  438 
  从s中找出p的子串， 返回子串开头的所有起始位置 值考虑小写
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

 /* 
 class Solution {
    public List<Integer> findAnagrams(String s, String p) {

       // 先对目标串p每个字符进行字符计数，统计出每个字符的出现次数
       int pLength = p.length();
       int sLength = s.length();

       int[] counts = new int[26];
       for(int i = 0; i < pLength; i++){
            counts[p.charAt(i) - 'a']++;
       }

       ArrayList<Integer> res = new ArrayList<>();  // 存储结果的结果集

        int[] tempCounts = new int[26]; // 记录窗口内每种字符的出现次数
        int left = 0, right = 0;
        while(right < sLength){
            int curR = s.charAt(right) - 'a';
            tempCounts[curR]++;        // curR字符的出现次数加一
            right++;    // 新增一个字符后，窗口右指针右移一位
            while(tempCounts[curR] > counts[curR]){ // 不断缩小窗口大小，直到把超标字符移出去一个，使得不超标
                tempCounts[s.charAt(left) - 'a']--;
                left++;     // 移走一个字符后窗口左指针右移一位
            }
            if(right - left == pLength){
                res.add(left);
            }
        }
        return res;
    }
}
 */
var findAnagrams = function (s, p) {}
