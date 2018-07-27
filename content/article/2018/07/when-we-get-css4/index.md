---
title: "CSS4 มีฟีเจอร์อะไรบ้าง และอีกนานเท่าไร เราถึงจะได้ใช้งาน ?"
pageTitle: "CSS4 มีฟีเจอร์อะไรบ้าง และอีกนานเท่าไร เราถึงจะได้ใช้งาน ?"

description: "---"

thumbnailImageName: "thumbnail"
coverImageName: "cover"

publishDate: "2018-07-25"

slug: "css4-and-where-to-find-them"

# Taxonomies
categories: ["CSS"]
tags: ["css"]

# Custom Params
minRead: "5"

# template name
type: "article"
---

ตลอดช่วงเวลาที่ผ่านมาของโลก Frontend Development การมาถึงของ CSS ในเวอร์ชั่นที่สาม หรือ CSS3 ก็ทำให้พวกเราตื่นเต้นกันสุด ๆ มีหนังสือ, มีคอร์ส CSS3 มากมาย มองไปทางไหน ๆ ก็เต็มไปด้วย CSS3

*...Mastering CSS3...*

*...CSS3 for DUMMIES...*

*...หลักสูตร Advance HTML5, CSS3...*

CSS3 ได้กลายเป็นหนึ่งในสุดยอด Buzzword มาอย่างยาวนาน พูดได้ว่าใครเรียก CSS ว่า CSS เฉย ๆ นี่เชยตายเลยครับ

CSS3 ได้ปรากฏตัวให้พวกเราได้ใช้งานช่วงแรก ๆ ตั้งแต่ปี 2011 ก็ได้มีการพัฒนาความสามารถต่าง ๆ เพิ่มขึ้นมามากมาย อย่างล่าสุดก็คือสิ่งมาที่เปลี่ยนโลกการทำ Layout อย่าง Grid Layout

นี่ก็ผ่านมาเป็นเวลากว่า 7 ปีแล้ว แต่ก็ยังไร้วี่แววของ Buzzword ใหม่ อย่าง CSS4

## CSS4 มาหรือยัง ?

ไม่ครับ CSS4 ยังไม่มา แล้วก็จะไม่มี CSS4 ด้วย

*“แต่เรามี CSS1, CSS2 (มี CSS2.1 ด้วย), CSS3 นะ จะไม่มี CSS4 ได้ยังไง ?”*

ก่อนอื่นเรามาดูกันก่อนครับ ว่า CSS แต่ละเวอร์ชั่น คืออะไร ?

## CSS Level

CSS (Cascading Style Sheets) จะไม่ได้ใช้ระบบ Versions เหมือนระบบอื่น ๆ แต่จะใช้สิ่งที่เรียกว่า **Levels** ในการบอกถึงระดับในการพัฒนา เช่น CSS Level 1 ก็คือ CSS1 นั่นเอง

แต่ละ Level ของ CSS จะถูกสร้างขึ้นต่อจาก Level ด้านล่าง โดยจะมีการปรับปรุง และเพิ่ม Features ใหม่ ๆ เข้าไป กล่าวได้ว่า CSS2 คือการเอา CSS1 มาเพิ่มความสามารถครับ

<p class="_tal-ct">
	<picture class="_mgt-32px">
		<source srcset="css-level@2x.webp 2x, css-level.webp" type="image/webp">
		<source srcset="css-level@2x.png 2x, css-level.png" type="image/png">
		<img
			src="css-level.png"
			alt="css-level"
			class="_w-at _mxw-100pct"
		>
		<em>Css Level – ภาพจาก wikipedia</em>
	</picture>
</p>

### CSS level 1

<a href="https://www.w3.org/Style/CSS/members" target="_blank" rel="noreferrer noopener" class="bio-link -fancy">CSSWG (CSS Working Group)</a> หรือกลุ่มคน ที่เป็นผู้ออกแบบ CSS ได้ร่างเอกสาร Specification ของ CSS Level 1 ออกมาตั้งแต่ปี 1996 ก่อนที่จะค่อย ๆ ถูก Implement ใน Web Browser ให้เราใช้งานในภายหลัง

ตัวเอกสารจะระบุถึง Features ทุกอย่างของ CSS level 1 เอาไว้ ไม่ว่าจะเป็นเรื่องของ ```margin```, ```padding```, ```font``` หรือ ```border``` เป็นต้น เป็นเอกสารที่ค่อนข้างยาว และละเอียดมากทีเดียว เพราะต้องลงรายละเอียดของทุก ๆ Features ให้เป็น Specification เดียวกัน

<p class="_tal-ct">
	<picture class="_mgt-32px">
		<source srcset="css1@2x.webp 2x, css1.webp" type="image/webp">
		<source srcset="css1@2x.png 2x, css1.png" type="image/png">
		<img
			src="css1.png"
			alt="css1"
			class="_w-at _mxw-100pct"
		>
		<em>เอกสาร CSS Level 1</em>
	</picture>
</p>

### Maturity Level

แน่นอนว่าไม่ใช้แค่ทำเอกสารเสร็จ แล้วมันจะถูกนำไป Implement ใน Web browser ทันทีเลย แต่เอกสารนี้ จะต้องผ่านกระบวนการต่าง ๆ อีกมากมาย

ซึ่งแบ่งเป็นสถานะแบบทั่วไป หรือที่เรียกกันว่า Maturity Level ดังนี้

- **Working Draft (WD)** – คือ Level ของเอกสารที่ยังไม่ stable แต่ทำออกมาเพื่อใช้ Community และ สมาชิก W3C ได้ทำการรีวิว เมื่อรีวิวเรียบร้อย หรือไม่มีการเปลี่ยนแปลงใด ๆ แล้ว อย่างน้อย 6 เดือน ก็จะเข้าสู่กระบวนการต่อไป
- **Candidate Recommendation (CR)** – คือ Level ที่ CSSWG พึงพอใจ แก้ issues หมดแล้ว และได้รับการยอมรับจาก Community ก็จะเป็นการประกาศ เพื่อให้ผู้ที่ Implement ทำการตรวจสอบว่า Requirement ชัดเจนเพียงพอหรือยัง
- **Proposed Recommendation (PR)** – เมื่อ Director ของ W3C Approved ว่า เอกสารมีคุณภาพเพียงพอ ก็จะเข้าสู้สถาณะ PR หรือเตรียม Propose ให้เป็น W3C Recommendation ต่อไป
- **W3C Recommendation (REC)** – เมื่อผ่านการรับรองขั้นสุดท้าย ของเหล่าคณะกรรมการแล้ว ก็จะถือว่า Specification ใช้เป็น Standard ได้ และไม่มีอะไรเปลี่ยนแปลงแล้ว

ซึ่งกระบวนการเหล่านี้ จะกินเวลานานมาก และจะมีกระบวนการตีกลับให้ไปแก้ไข ซึ่งผมไม่ได้พูดถึงอีกด้วย เรียกได้ว่า ยาวข้ามปีเลยทีเดียว

เพื่อน ๆ อาจจะเคยได้ใช้งาน Vender prefix ของ CSS เช่น ```-webkit-```, ```-moz-``` หรือ ```-ms-``` กันใช่ไหมครับ

prefix เหล่านี้ Web browser ได้นำมาใช้งาน เพื่อเป็นการทดสอบ Features ของ CSS โดยไม่กระทบกับ Standard ก่อนที่มันจะมี Maturity Level ที่สูงพอนั่นเอง

เพราะอาจจะมีบาง Feature ถูกเปลี่ยนแปลง หรือถูกเอาออกจาก Specification ในภายหลังก็ได้ครับ

### CSS level 2 / 2.1 / 2.2

CSS Level 2 ก็คือการเอา Specification ของ Level 1 มาปรับปรุง หรือเพิ่ม Features ใหม่ ๆ เข้าไป อย่าง ```border-radius``` เป็นต้น

แล้วก็ร่างเอกสารใหม่ทั้งหมด... เอกสารเริ่มเยอะจนต้องมีการแบ่ง Sections

คุณสมบัติเก่า ที่ไม่มีอะไรเปลี่ยนแปลง ก็ต้องถูกเอาไปใส่ใน Specification ด้วย เพราะต่อยอดมาจาก CSS1

และเอาไปเข้ากระบวนการทั้งหมดใหม่ ต้องรีวิวใหม่ทั้งหมดพร้อมกัน...

ซึ่งมันช้าและวุ่นวายมาก ๆ แม้จะเป็นการแก้ไขเพียงเล็กน้อยก็ตาม

### CSS level 3

จากปัญหาเรื่อง Specification ที่ผ่านกระบวนการต่าง ๆ ช้ามาก เพราะ Specification มีลักษณะเป็น Monolithic

CSSWG จึงได้ทำการ แตก Specification ออกเป็น Module เล็ก ๆ แทน เช่น CSS Color Module Level 3, CSS Background and Border Module Level 3

หมายความว่า CSS3 ที่เราพูดถึงกัน ไม่ใช่ CSS3 ที่เป็น Specification ฉบับเดียวอีกต่อไปแล้ว แต่จะประกอบไปด้วยหลาย ๆ Module และเมื่อมี Module ใหม่ ๆ เข้ามา ก็จะไปเริ่มที่ Level 1 ใหม่ เช่น CSS Flexible Box Layout Level 1 เป็นต้น

สิ่งเหล่านี้ทำให้ CSSWG ใส่สิ่งใหม่ ๆ ลงไปใน CSS ได้ง่ายขึ้น เพราะไม่จำเป็นต้องรอให้ Specification ของทุกอย่าง ผ่านกระบวนการ Recommendation แต่พิจารณาเป็น Module ได้เลย ทำให้ในช่วงเวลานั้น CSS มี Feature ใหม่ ๆ เกิดขึ้นมามากมาก เกิดเป็น Buzzword “CSS3” ขึ้นมา

### กลับมาที่ CSS4
แน่นอนว่าหลังจากนี้ จะมี CSS4 แล้ว แต่อาจจะเป็น CSS Pseudo-Elements Level 4, CSS Text Decoration Level 4 แทน

เพื่อน ๆ สามารถดู <a href="https://www.w3.org/Style/CSS/current-work" target="_blank" rel="noreferrer noopener" class="bio-link -fancy">สถานะปัจจุบัน</a> ของแต่ละ Module ได้ครับ ว่าจะมีอะไรใหม่ ๆ มาให้เราได้ใช้บ้าง และ Module ไหน มี Maturity Level ใดบ้างแล้ว

สุดท้ายนี้ CSS นั้นมีการพัฒนาอยู่ตลอด โดย CSSWG และ Community ที่ยิ่งใหญ่ ทำให้ CSS เป็นหนึ่งในเครื่องมือทำ Style, Layout ของ UI ที่ทรงพลังมาอย่างช้านาน
