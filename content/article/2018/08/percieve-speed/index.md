---
title: "Perceived Performance และเวทมนต์ที่ทำให้เว็บเร็วขึ้น"
pageTitle: "Perceived Performance และเวทมนต์ที่ทำให้เว็บเร็วขึ้น"

description: "---"

thumbnailImageName: "thumbnail"
coverImageName: "cover"

publishDate: "2018-08-22"

slug: "perceived-performance-and-optimization-magic"

# Taxonomies
categories: ["DESIGN"]
tags: ["design", "web", "UI", "UX"]

# Custom Params
minRead: "6"

# template name
type: "article"

---

ถ้าจะพูดถึงเหตุผลอันดับต้น ๆ ที่ทำให้ User หัวร้อน และออกจะเว็บเราไปคงหนีไม่พ้นเรื่องที่เว็บช้า ไม่ว่าจะเป็น โหลดช้า ประมวลผลช้า ถ้า User “รู้สึก” ว่ามันช้าเกินไป ก็คงจะไม่ดีต่อเว็บเราแน่ ๆ

เราจึงต้องหาสารพัดวิธี ที่จะ Optimize Performance ของเว็บเราให้ดีขึ้น โดยในบทความก่อนหน้านี้ ผมก็ได้พูดถึงการ <a href="https://chanto.io/2018/07/how-to-optimize-your-website/" target="_blank" class="bio-link -fancy">Optimize Performance เบื้องต้น</a> สำหรับ Frontend Developer กันไปแล้ว

แต่การ Optimize Performance ไม่ใช่เรื่อง Engineer เสมอไป แต่เป็นสิ่งที่ Designer ก็สามารถทำได้เช่นกัน เผลอ ๆ **คุ้มค่า และทรงพลัง กว่าการแก้ไขทาง Engineer** อีกด้วย

## Perceived Performance

Steve Seow จาก Microsoft ค้นพบว่า การที่ User จะเริ่มรู้สึกถึงความแตกต่างใน Performance นั้น เราจะต้องทำให้ เว็บเราเร็วขึ้นกว่าเดิม 20% (แค่เริ่มรับรู้ถึงความแตกต่างนะครับ)

หมายความว่า ถ้าเราจะให้ความเปลี่ยนแปลงนั้น เกิด Impact จริง ๆ อาจจะต้องทำให้เว็บ เร็วขึ้นถึงประมาณ 30% เลยทีเดียว OMG! 😱

- image

ปัญหาก็คือว่า ในความเป็นจริง เราไม่สามารถควบคุมทุกอย่างได้ ยิ่งโปรเจคที่มี Codebase ขนาดใหญ่ หรือมี Infrastructure ที่ซับซ้อน การ Optimize ให้เว็บให้เร็วขึ้นเป็นเรื่องที่ยากมาก จนบางที การรื้อเขียนใหม่หมดเลย อาจจะง่ายกว่าก็ได้

**แล้วทำไมเราถึงต้องดิ้นรนในการ Optimize codebase หรือ Infrastructure ล่ะ ?**

นั่นก็เพราะว่า มันสามารถทำการวัดผลวัดผล, เปรียบเทียบความเปลี่ยนแปลง และสรุปผลได้ง่าย เพราะทุกอย่าง ถูกวัดค่าเป็นตัวเลขได้หมดครับ

แต่ในโลกแห่งความเป็นจริง User ไม่ได้ใช้งานเว็บเรา พร้อมกับนาฬิกาจับเวลาครับ ถึงเว็บเราจะทำงานช้า ถ้าเราทำให้ User “รู้สึก” เร็วได้ ก็จบครับ ความรู้สึกเร็วที่ User รับรู้นี่แหละ ที่เราเรียกว่า Perceived Performance

> สำหรับ User นั้น, Web Performance ไม่ใช่เรื่องของตัวเลข หรือ Score แต่เป็นเรื่องของความรู้สึก และการรับรู้

## เวลาเป็นเรื่องตลก บางครั้งมันก็เดินช้า บางครั้งก็เดินเร็ว

เคยรู้สึกไหมว่า บางครั้ง เวลามั่งช่างผ่านไปไวเสียเหลือเกิน โดยเฉพาะเวลาแห่งความสุข 😍 แต่บางครั้ง เวลาก็ผ่านไปช้าซะเหลือเกิน เช่นเวลาที่เราต้องรอใครซักคน (เอ๊า! ดราม่าซะงั้น)

Jeremy Dean นักจิตวิทยา บอกไว้ว่า “เวลาจะไม่เดินเมื่อเราสนุก” เหมือนที่คนไทยชอบพูดว่า “สนุกจนลืมเวลา” นั่นแหละครับ

โดยในการทำกิจกรรมแต่ละอย่าง เราจะแบ่งการใช้เวลาออกได้เป็น 2 Phases ครับ คือ

- **Active Phase** – คือเวลาที่เราสนุก, ให้ความสนใจกับอะไรบางอย่าง หรือเวลาที่เราใช้หัวเยอะ ๆ
- **Passive Phase** – คือเวลาที่เราคิ้วขมวด เดินวนไปวนมา หรือนั่งรอครับ

และเรื่องสำคัญก็คือ Richard Larson นักวิจัยจาก MIT ระบุว่า **มนุษย์จะรับรู้ถึง Passive Phase เกินจริงไปถึง 36%!!!** 😱

ยกตัวอย่างเช่น

เวลาเราไปกินข้าว ตอนที่เราเลือกเมนู ซึ่งใช้เวลาพอสมควร แต่กลับไม่รู้สึกว่าเวลาผ่านไปนานเลย (Active Phase) แต่ระหว่างที่เรารอหาหารที่สั่ง ซึ่งก็ใช้เวลาพอกัน แต่ทำไมถึงรู้สึกว่าเรานั่งรออาหารนานจัง (Passive Phase)

หรืออีกตัวอย่างคือ ใน กทม. บนถนนที่รถติดมาก ระหว่างที่เราหัวร้อน เพราะรถขยับไปทีละนิด ๆ ช่างดูยาวนานเหลือเกิน (Passive สลับ Active) กว่าจะถึงบ้าน, แต่เมื่อเทียบกับการปั่นจักรยานไปเรื่อย ๆ (Active อย่างเดียว) ทั้งที่ใช้เวลาพอ ๆ กัน แต่แบบหลัง กลับรู้สึกไวกว่า และ รู้สึกพอใจ (satisfy) มากกว่า

## ทำให้ Active Phase ยาวขึ้น และ Passive Phase เจ็บปวดน้อยลง

การเอาความรู้เรื่อง Perceived Performance มาใช้ในการออกแบบ ทำได้หลายอย่างมาก และเป็นเรื่องที่สนุกมาก ๆ ด้วยครับ

เราจะทำให้ Active Phase ยาวขึ้น และ Passive Phase เจ็บปวดน้อยลงได้หลายวิธี เช่น

1. ตอบสนองทันที
2. ทำให้ User สนุกกับการรอ
3. ทำให้ User เกิด Sense of Certainty หรือความแน่นอน ในการรอ
4. ดึงดูดความสนใจของ User
5. รีบ Render สิ่งที่สำคัญออกไปก่อน

แต่ก่อนที่เราจะทำอะไรจนมากเกินไป เรามาดูกันก่อนครับว่า ในสภาวะปรกติ ช่วงเวลาแค่ไหน ถึงจะรู้สึกช้า

สำหรับการ Browse เว็บ ปรกติแล้ว มนุษย์จะเริ่มรู้สึกตัวว่าจะต้องรอ และเปลี่ยนเป็นโหมดรอ ก็จะใช้เวลาประมาณ 1 วินาทีครับ

นั่นหมายความว่า ถ้าใช้เวลาน้อยกว่า 1 วินาที User จะยังรู้สึกว่า “มันทำงานทันที” อยู่ การใส่อะไร Fancy ลงไปจึงต้องคิดให้ดีก่อนครับ ว่ามันมากเกินไปไหม

## ตัวอย่างเทคนิคการทำให้ bla bla bla

### Progress bar

Progress bar เรียกได้ว่าเป็น อาวุธคู่กายของ Web Designer มาช้านาน แต่ไม่ได้หมายความว่า Progress bar จะเหมือนกันหมดนะครับ



 Progress bars are not all created equal, and certain animations can make them feel faster.

 Chris Harrison, a grad student at Carnegie Mellon found that progress bars with bands that animate in the opposite direction of the progress make the bar seem to fill faster.

 Any action taking less than 1 or so seconds doesn't need an indicator at all, thought is uninterrupted. By showing an indicator here, you're taking their focus away from the action they just took and forcing them to focus on the fact that they have to wait for the app to respond. So you are in effect making the app feel *slower*.
1-3 seconds displaying a progress bar is preferable. Don't need to include lots of written explanation as to what the app is doing, since this is within the window where most people still have patience.
3-10s? Include an explanation as to what the app is doing. These durations can seem unreasonable if you don't explain to the user what is happening.


user attention

Slack transitions from a visually arresting loader with an explanation, to another loader with an extraneous quotation to read, and then to a skeleton UI, and then to the full UI. Holding user attention through this process.

---
ather than hasten passive phase, increase active phase's share.

First, use data to identify what your users interact with first.

Amazon identified that for their users, their minimum viable layout is the main menu and this hero area.

Load this first and bring in everything else afterwards. For most users you'll be delivering them an experience that contains the UI they want to use anyways.

There are a lot of "critical path" or "critical css" build libraries that will inline the styles of elements above a defined "fold" to load those elements fully styled with one request. This doesn't account for any JS that might be needed to use this, nor do you necessarily want everything above some fold. Find out what *your* users need, and build your own custom minimum viable layout to suit them.

หลอด เริ่ดที่ 5 user คิดว่าคว่าจะถึง 100 คงอีกนาน ถึงจพเสร็จแต่ user อาจรู้สุกติดลย ถเาเริ่มที่ 80 แล้วว่ิงจยทึง 100 user ก็คิดว่า อีกนิดเดียว เกิดความรู้สึกบวก