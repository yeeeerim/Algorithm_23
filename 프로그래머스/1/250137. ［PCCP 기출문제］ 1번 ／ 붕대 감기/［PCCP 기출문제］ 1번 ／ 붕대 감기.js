function solution(bandage, health, attacks) {
    let currentHealth = health; // 현재 체력
    let beforeAttackTime = 0; // 직전 공격 시간
    let isEnd = false; // 사망 여부

    attacks.map((att) => {
        if(isEnd) return;
        
        const stack = att[0] - beforeAttackTime - 1;
        currentHealth += bandage[2] * Math.floor(stack / bandage[0]); // 추가 회복
        currentHealth = Math.min(health, currentHealth + stack * bandage[1]); // 붕대 감기
        currentHealth -= att[1]; // 피격
        
        if(currentHealth <= 0) {
            isEnd = true;
            currentHealth = -1;
        }
        
        beforeAttackTime = att[0];
    })
    
    return currentHealth;
}